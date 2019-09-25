import { ProfileComponentsModule } from './../../components/components/profile/profile-components.module';
import { SharedCardsComponentsModule } from './../../components/shared/cards/shared-cards-components.module';
import { NavbarComponentModule } from './../../components/shared/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    NavbarComponentModule,
    ProfileComponentsModule,
    SharedCardsComponentsModule,
  ],
})
export class ProfilePageModule {}
