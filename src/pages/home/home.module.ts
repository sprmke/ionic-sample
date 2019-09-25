import { SharedTabsComponentsModule } from './../../components/shared/tabs/shared-tabs-components.module';
import { NavbarComponentModule } from './../../components/shared/navbar/navbar.module';
import { HomeComponentsModule } from './../../components/components/home/home-components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    NavbarComponentModule,
    HomeComponentsModule,
    SharedTabsComponentsModule
  ],
})
export class HomePageModule {}
