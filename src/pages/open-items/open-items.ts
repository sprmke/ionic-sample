import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-open-items',
  templateUrl: 'open-items.html',
})
export class OpenItemsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  presentOpenItemsModal() {
    let openItemsModal = this.modalCtrl.create('OpenItemsModalPage');
    openItemsModal.present();
  }

}
