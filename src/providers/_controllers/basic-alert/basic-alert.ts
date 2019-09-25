import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorConverterPipe } from './../../../pipes/error-converter/error-converter';

@Injectable()
export class BasicAlertProvider {

  constructor(public http: HttpClient, private alertCtrl: AlertController, private errorConverterPipe: ErrorConverterPipe) {
  }

  presentAlert(params: { title?: string, subTitle?: string, message: string, buttons?: Array<object | string>, errorType?: boolean }) {
    if (params.errorType) {
      params.message = this.errorConverterPipe.transform(params.message);
    }
    let alert = this.alertCtrl.create({
      title: params.title,
      subTitle: params.subTitle,
      message: params.message,
      buttons: params.buttons || ['Ok']
    });
    alert.present();
  }

}
