import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-document',
  templateUrl: 'document.html',
})
export class DocumentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  presentDocumentModal(type) {
    let documentModal = this.modalCtrl.create('DocumentModalPage', { itemType: type });
    documentModal.present();
  }

}
