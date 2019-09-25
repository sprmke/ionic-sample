import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {
  @Input() activePage: string;

  constructor(public modalCtrl: ModalController) {
  }

  presentPropertiesModal() {
    let profileModal = this.modalCtrl.create('MyPropertiesModalPage');
    profileModal.present();
  }

}
