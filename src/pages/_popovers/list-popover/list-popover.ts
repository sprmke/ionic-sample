import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-list-popover',
  templateUrl: 'list-popover.html',
})
export class ListPopoverPage {
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('Items: ', this.items);
  }

}
