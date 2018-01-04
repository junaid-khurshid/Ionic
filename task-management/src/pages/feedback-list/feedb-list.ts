import {Component, OnInit} from '@angular/core';

import {NavController} from 'ionic-angular';
import {Feedback} from "../../models/Feedback";
import {WebApi} from "../../helper/WebApi";
import {FeedbackDetail} from "../feedback-detail/feedb-detail";

@Component({
  selector: 'page-feedback-list',
  templateUrl: 'feedb-list.html',
  providers: [WebApi]
})
export class FeedbackList implements OnInit{
  public feedbacks: Array<Feedback>;
  public posts: any;
  public movieName;

  constructor(public navCtrl: NavController, private webApi:WebApi) {
    this.feedbacks = new Array();
  }

  fetchFeedbacks(){
    var f = new Feedback();
    f.setId(1);
    f.setLikes(10)
    f.setFeedback("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
    f.setTime("10 mins ago");
    f.setName("Shayan Ahmed");
    this.feedbacks[0] = f;
    f = new Feedback();
    f.setId(1);
    f.setLikes(10)
    f.setFeedback("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
    f.setTime("10 mins ago");
    f.setName("Shayan Ahmed");
    this.feedbacks[1] = f;
    f = new Feedback();
    f.setId(1);
    f.setLikes(10)
    f.setFeedback("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
    f.setTime("10 mins ago");
    f.setName("Shayan Ahmed");
    this.feedbacks[2] = f;
    f = new Feedback();
    f.setId(1);
    f.setLikes(10)
    f.setFeedback("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
    f.setTime("10 mins ago");
    f.setName("Shayan Ahmed");
    this.feedbacks[3] = f;
  }

  fetchPosts(){
    this.webApi.getTasks().subscribe(
      data => {
        console.log(data);
        this.posts = data['Result'];
        console.log(this.posts);
      },
      err => {
        console.log(err);
      },
      () => console.log('Movie Search Complete')
    );
  }

  ngOnInit(): void {
    this.movieName = "Matrix";
    this.fetchPosts();
  }

  viewFeed(feed){
    this.navCtrl.push(FeedbackDetail,{feed: feed});
  }
}
