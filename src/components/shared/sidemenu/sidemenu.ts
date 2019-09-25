import { Component } from '@angular/core';
import { App } from 'ionic-angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: 'sidemenu.html'
})
export class SidemenuComponent {
  activePage = 'home';

  constructor(public appCtrl: App) {
  }

  goToHomePage() {
    this.activePage = 'home';
    this.appCtrl.getActiveNavs()[0].setRoot('HomePage');
  }
  goToFinancialPage() {
    this.activePage = 'financial';
    this.appCtrl.getActiveNavs()[0].setRoot('FinancialPage');
  } 
  goToLeviesPage() {
    this.activePage = 'levies';
    this.appCtrl.getActiveNavs()[0].setRoot('LeviesPage');
  }
  goToDocumentPage() {
    this.activePage = 'documents';
    this.appCtrl.getActiveNavs()[0].setRoot('DocumentPage');
  }
  goToOpenItemsPage() {
    this.activePage = 'open-items';
    this.appCtrl.getActiveNavs()[0].setRoot('OpenItemsPage');
  }
  goToMeetingsPage() {
    this.activePage = 'meetings';
    this.appCtrl.getActiveNavs()[0].setRoot('MeetingsPage');
  }
  goToFaqsPage() {
    this.activePage = 'faqs';
    this.appCtrl.getActiveNavs()[0].setRoot('FaqsPage');
  }
  goToBuildingPage() {
    this.activePage = '';
    this.appCtrl.getActiveNavs()[0].setRoot('BuildingPage');
  }
  goToStrataSettingsPage() {
    this.activePage = 'strata-settings';
    this.appCtrl.getActiveNavs()[0].setRoot('StrataSettingsPage');
  }
}
