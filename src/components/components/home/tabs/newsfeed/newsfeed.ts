import { ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: 'newsfeed.html'
})
export class NewsfeedComponent {
  postType: string;

  constructor(private modalCtrl: ModalController) {
  }

  presentNewsfeedItemModal() {
    let profileModal = this.modalCtrl.create('NewsfeedModalPage');
    profileModal.present();
  }

}
