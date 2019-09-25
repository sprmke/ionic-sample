import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-financial',
  templateUrl: 'financial.html',
})
export class FinancialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
