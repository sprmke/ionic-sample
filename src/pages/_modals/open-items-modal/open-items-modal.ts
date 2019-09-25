import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-open-items-modal',
  templateUrl: 'open-items-modal.html',
})
export class OpenItemsModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  }

  dismissModal() {
      this.viewCtrl.dismiss();
  }

}
