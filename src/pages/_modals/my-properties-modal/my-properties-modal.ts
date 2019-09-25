import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-my-properties-modal',
  templateUrl: 'my-properties-modal.html',
})
export class MyPropertiesModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  }

  dismissModal() {
      this.viewCtrl.dismiss();
  }
}
