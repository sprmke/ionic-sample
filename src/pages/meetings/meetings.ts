import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-meetings',
  templateUrl: 'meetings.html',
})
export class MeetingsPage {
  meetingsSegment = 'upcoming-meetings';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingsPage');
  }

}
