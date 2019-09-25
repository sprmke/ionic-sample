import { NotificationsModalPageModule } from './../_modals/notifications-modal/notifications-modal.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsPage } from './notifications';

@NgModule({
  declarations: [
    NotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsPage),
    NotificationsModalPageModule
  ],
})
export class NotificationsPageModule {}
