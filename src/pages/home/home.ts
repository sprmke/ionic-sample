import { Component } from '@angular/core';
import { NavController, App, IonicPage } from 'ionic-angular';

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeSegment = 'newsfeed';

  constructor(public navCtrl: NavController, public appCtrl: App) {
  }

  ionViewDidLoad() {
  }

  goToBuildingPage() {
    this.appCtrl.getActiveNav().setRoot('BuildingPage');
  }

}