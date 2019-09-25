import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastProvider {

  constructor(public http: HttpClient, private toastCtrl: ToastController) {
  }

  presentToast(params: {message: string, duration?: number, position?: string, showCloseButton?: boolean, closeButtonText?: string}) {
    const toast = this.toastCtrl.create({
      message: params.message,
      duration: params.duration || 3000,
      position: params.position,
      showCloseButton: params.showCloseButton,
    });
    toast.present();
  }
}
