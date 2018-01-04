import {Http , Headers, RequestMethod, Request } from '@angular/http';
import 'rxjs/add/operator/map';
import {Constants} from "./Constants";

export class WebApi {
  static get parameters() {
    return [[Http], [Constants]];
  }

  constructor(private http:Http, private constants:Constants) {

  }

  login (email : string , password : string ){

    let data = new FormData()
    data.append("User[email]" , email);
    data.append("User[password]", password);

    let url = this.constants.API_URL + 'login';
    let header1 = new Headers();
    let response = this.http.post (url,data, {headers : header1})
      .map(res => res.json());
    return response;
  }


  addTask(task) {
    let url = this.constants.API_URL + 'tasks/';
    let headers0 = new Headers();
    // headers0.set('Content-Type', 'multipart/form-data');
    headers0.set('token', 'WDz7nQU5Ibrefmt0');

    let response = this.http.post(url, task, {headers: headers0}).map(res => res.json());
    return response;
  }

  getTasks() {
    let url = this.constants.API_URL + 'tasks/';
    let headers0 = new Headers();
    headers0.set('Content-Type', 'application/json');
    headers0.set('token', 'WDz7nQU5Ibrefmt0');

    let reqObj = new Request({
      method: RequestMethod.Get,
      url: url,
      headers: headers0


    });
    let response = this.http.request(url,reqObj).map(res => res.json());;
    return response;
  }

  getHotels() {
    let url = this.constants.API_URL + 'hotels/';
    let headers0 = new Headers();
    headers0.set('Content-Type', 'application/json');
    headers0.set('token', 'WDz7nQU5Ibrefmt0');

    let reqObj = new Request({
      method: RequestMethod.Get,
      url: url,
      headers: headers0


    });
    let response = this.http.request(url,reqObj).map(res => res.json());;
    return response;
  }

  getRooms() {
    let url = this.constants.API_URL + 'rooms/';
    let headers0 = new Headers();
    headers0.set('Content-Type', 'application/json');
    headers0.set('token', 'WDz7nQU5Ibrefmt0');

    let reqObj = new Request({
      method: RequestMethod.Get,
      url: url,
      headers: headers0


    });
    let response = this.http.request(url,reqObj).map(res => res.json());;
    return response;
  }

  getDepartments() {
    let url = this.constants.API_URL + 'departments/';
    let headers0 = new Headers();
    headers0.set('Content-Type', 'application/json');
    headers0.set('token', 'WDz7nQU5Ibrefmt0');

    let reqObj = new Request({
      method: RequestMethod.Get,
      url: url,
      headers: headers0


    });
    let response = this.http.request(url,reqObj).map(res => res.json());;
    return response;
  }
}
