import {Component, OnInit} from '@angular/core';

import {DataCenter} from '../../helper/DataCenter'
import {User} from '../../models/User'
import {WebApi} from "../../helper/WebApi";


import {NavController, AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [WebApi]
})
export class LoginPage implements OnInit{




  ngOnInit(): void {
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('password');
  }
  user: User;
  loginObj = {email: "", password:""};
  constructor(public navCtrl: NavController, public loadCtrl : LoadingController , public altCtrl : AlertController  , public webApi: WebApi ) {
    this.user = new User();


  }




  loginUser() {
    if (this.loginObj.email == '' || this.loginObj.password == '') {
      let alert = this.altCtrl.create({
        title: 'Register Error',
        subTitle: 'All fields are required',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    let load = this.loadCtrl.create({
      content: 'Logging into.. '
    });
    load.present();


    // this.webApi.getHotels().subscribe(
    //   data => {
    //
    //     console.log(data);
    //   },
    //   err => {
    //     console.log(err);
    //   },
    //   () => console.log('Added')
    // );
    this.webApi.login(this.loginObj.email, this.loginObj.password)
      .subscribe(
        data => {

          this.user.setEmail(this.loginObj.email);
          this.user.setPassword(this.loginObj.password);
          DataCenter.getInstance().saveLoginUserData(this.user);
          window.location.reload();
        });

  }
}
