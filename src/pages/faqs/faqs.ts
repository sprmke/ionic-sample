import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs.html',
})
export class FaqsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  presentFaqsModal() {
    let openItemsModal = this.modalCtrl.create('FaqsModalPage');
    openItemsModal.present();
  }

}
