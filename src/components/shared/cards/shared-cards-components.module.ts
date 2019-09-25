import { RepairComponent } from './repair/repair';
import { PaymentComponent } from './payment/payment';
import { MeetingComponent } from './meeting/meeting';
import { ManagerPostComponent } from './manager-post/manager-post';
import { LeviesComponent } from './levies/levies';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LeviesComponent,
    ManagerPostComponent,
    MeetingComponent,
    PaymentComponent,
    RepairComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    LeviesComponent,
    ManagerPostComponent,
    MeetingComponent,
    PaymentComponent,
    RepairComponent
  ]
})
export class SharedCardsComponentsModule {}