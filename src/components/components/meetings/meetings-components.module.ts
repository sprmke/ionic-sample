import { UpcomingMeetingsComponent } from './tabs/upcoming-meetings/upcoming-meetings';
import { PreviousMeetingsComponent } from './tabs/previous-meetings/previous-meetings';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PreviousMeetingsComponent,
    UpcomingMeetingsComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    PreviousMeetingsComponent,
    UpcomingMeetingsComponent
  ]
})
export class MeetingsComponentsModule {}