import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-notifications-modal',
  templateUrl: 'notifications-modal.html',
})
export class NotificationsModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  }

  dismissModal() {
      this.viewCtrl.dismiss();
  }

}
