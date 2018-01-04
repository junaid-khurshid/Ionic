import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {DataCenter} from '../helper/DataCenter';
import {FeedbackList} from "../pages/feedback-list/feedb-list";
import {HttpModule} from "@angular/http";
import {FeedbackDetail} from "../pages/feedback-detail/feedb-detail";
import {AddFeedback} from "../pages/add-feedback/add-feedb";
import {Constants} from "../helper/Constants";
import {WebApi} from "../helper/WebApi";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedbackList,
    FeedbackDetail,
    AddFeedback,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedbackList,
    FeedbackDetail,
    AddFeedback,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage ,  WebApi, DataCenter , Constants ]
})
export class AppModule {}
