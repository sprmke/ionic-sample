import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-document-modal',
  templateUrl: 'document-modal.html',
})
export class DocumentModalPage {
  itemType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.itemType = this.navParams.get('itemType');
  }

  dismissModal() {
      this.viewCtrl.dismiss();
  }

}
