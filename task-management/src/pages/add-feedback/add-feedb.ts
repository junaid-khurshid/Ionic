import {Component, OnInit} from '@angular/core';

import {NavController} from 'ionic-angular';
import {WebApi} from "../../helper/WebApi";
import {FeedbackList} from "../feedback-list/feedb-list";
import {HomePage} from "../home/home";

@Component({
  selector: 'add-feedback',
  templateUrl: 'add-feedb.html',
  providers: [WebApi]
})
export class AddFeedback implements OnInit{
  public hotels: any;
  public rooms: any;
  public departments: any;
  public feed = {title: '', status: '',hotel_id: '', department_id: '',room_id: '', priority_id: '', assignee_id: []};

  ngOnInit(): void {
    this.webApi.getHotels().subscribe(
      data => {
        this.hotels = data['Result'];
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log('Added')
    );
    this.webApi.getRooms().subscribe(
      data => {
        this.rooms = data['Result'];
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log('Added')
    );
    this.webApi.getDepartments().subscribe(
      data => {
        this.departments = data['Result'];
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log('Added')
    );
  }

  constructor(public navCtrl: NavController, private webApi: WebApi) {

  }

  addFeed(){
    console.log(this.feed);

    let feedData = new FormData();
    feedData.append("title",this.feed.title);
    feedData.append("room_id","79579223");
    feedData.append("department_id","623874");
    feedData.append("hotel_id","11449275");
    feedData.append("priority_id","1");
    feedData.append("status",this.feed.status);
    for(let i=0;i<this.feed.assignee_id.length;i++){
      feedData.append("assignee_id[" + i + "]", this.feed.assignee_id[i]);
    }
    console.log(this.feed);
    this.webApi.addTask(feedData).subscribe(
      data => {
        console.log(data);
        this.navCtrl.popTo(HomePage);
        this.navCtrl.push(FeedbackList);
      },
      err => {
        console.log(err);
      },
      () => console.log('Added')
    );
  }

}
