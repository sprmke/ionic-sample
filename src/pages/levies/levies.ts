import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-levies',
  templateUrl: 'levies.html',
})
export class LeviesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
