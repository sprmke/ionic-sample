import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-faqs-modal',
  templateUrl: 'faqs-modal.html',
})
export class FaqsModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
