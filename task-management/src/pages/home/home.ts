import {Component, OnInit} from '@angular/core';

import {NavController} from 'ionic-angular';

import {AddFeedback} from "../add-feedback/add-feedb";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{



  ngOnInit(): void {
    // this.pages = [
    //   { title: 'Add New', component: AddFeedback, icon:'add-circle'},
    //   { title: 'View Feedbacks', component: FeedbackList, icon: 'list' },
    //   { title: 'Logout', component: LoginPage, icon: 'exit' }
    // ];
  }
  public rootPage = null;
  //pages: Array<{title: string, component: any, icon:string}>;
  constructor(public navCtrl: NavController) {
  }
log (){
    this.navCtrl.push(LoginPage);
}

  add(){
    this.navCtrl.push(AddFeedback);
  }

  openPage(page){
    if(page.component == LoginPage){
      window.localStorage.clear();
    }
    this.navCtrl.push(page.component);
  }

}
