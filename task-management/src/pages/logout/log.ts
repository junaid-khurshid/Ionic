import { Component } from '@angular/core';

import { NavController , NavParams } from 'ionic-angular';

@Component({
  selector: 'page-log',
  templateUrl : 'log.html'
})
export class LogPage {
public acha : any ;
  constructor(public navc : NavController , public params : NavParams) {
    this.navc = navc ;
    //this.params = params ;
    this.acha = params.get("parm");

  }


}
