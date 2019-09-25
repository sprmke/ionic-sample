import { MeetingsComponentsModule } from './../../components/components/meetings/meetings-components.module';
import { NavbarComponentModule } from './../../components/shared/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetingsPage } from './meetings';

@NgModule({
  declarations: [
    MeetingsPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetingsPage),
    NavbarComponentModule,
    MeetingsComponentsModule
  ],
})
export class MeetingsPageModule {}
