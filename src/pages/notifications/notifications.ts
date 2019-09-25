import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  presentPopover(myEvent) {
    const items = ['Mark all as read', 'Mute', 'Settings'];
    const popover = this.popoverCtrl.create('ListPopoverPage', items);
    popover.present({
      ev: myEvent
    });
  }

  presentNotificationsModal() {
    let notificationsModal = this.modalCtrl.create('NotificationsModalPage');
    notificationsModal.present();
  }

}
