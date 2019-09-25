import { SharedCardsComponentsModule } from './../../../components/shared/cards/shared-cards-components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsModalPage } from './notifications-modal';

@NgModule({
  declarations: [
    NotificationsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsModalPage),
    SharedCardsComponentsModule
  ]
})
export class NotificationsModalPageModule {}
