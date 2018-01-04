import {User} from '../models/User';

export class DataCenter {
  public static dataCenter: DataCenter;
  constructor() {
  }

  public static getInstance(): DataCenter{
    if (this.dataCenter){
      return this.dataCenter;
    } else{
      return new DataCenter();
    }
  }

  setData(key, value) {
    window.localStorage.setItem(key, value);
  }

  getData(key) {
//        this.storage.ready().then(() => {
//            this.storage.get(key).then((val) => {
//                return val;
//            });
//        });
    return window.localStorage.getItem(key);
  }

  saveLoginUserData(user:User){
    this.setData("email", user.getEmail());
    this.setData("password", user.getPassword());
  }

  getLoginUserData(){
    var user = new User();
    user.setId(this.getData("id"));
    user.setName(this.getData("name"));
    user.setEmail(this.getData("email"));
    return user;
  }

  isUserLogIn(): boolean{
    console.log(this.getData('id'));
    console.log(this.getData('email'));
    console.log(this.getData('password'));
    if (this.getData('email')){
      return true;
    }
    return false;
  }
}
