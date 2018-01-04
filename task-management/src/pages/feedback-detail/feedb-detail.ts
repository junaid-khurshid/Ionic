import {Component, OnInit} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {Post} from "../../models/Post";

@Component({
  selector: 'page-feedback-detail',
  templateUrl: 'feedb-detail.html'
})
export class FeedbackDetail implements OnInit{
  public post:Post;

  ngOnInit(): void {

  }

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.post = navParams.get("feed");
  }

}
