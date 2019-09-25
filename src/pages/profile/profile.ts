import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileSegment = 'recent-updates';

  constructor(public navCtrl: NavController, public navParams: NavParams,  public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
  }

  presentPopover(myEvent) {
    const items = ['Edit', 'Settings'];
    const popover = this.popoverCtrl.create('ListPopoverPage', items);
    popover.present({
      ev: myEvent
    });
  }

}
