import { ThemeComponent } from './tabs/theme/theme';
import { GeneralComponent } from './tabs/general/general';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    GeneralComponent,
    ThemeComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    GeneralComponent,
    ThemeComponent
  ]
})
export class StrataSettingsComponentsModule {}