import { LeviesComponentsModule } from './../../components/components/levies/levies-components.module';
import { NavbarComponentModule } from './../../components/shared/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeviesPage } from './levies';

@NgModule({
  declarations: [
    LeviesPage,
  ],
  imports: [
    IonicPageModule.forChild(LeviesPage),
    NavbarComponentModule,
    LeviesComponentsModule
  ],
})
export class LeviesPageModule {}
