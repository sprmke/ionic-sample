import { StrataSettingsComponentsModule } from './../../components/components/strata-settings/strata-settings-components.module';
import { NavbarComponentModule } from './../../components/shared/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrataSettingsPage } from './strata-settings';

@NgModule({
  declarations: [
    StrataSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(StrataSettingsPage),
    NavbarComponentModule,
    StrataSettingsComponentsModule
  ],
})
export class StrataSettingsPageModule {}
