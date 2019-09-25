import { StrataComponent } from './strata/strata';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    StrataComponent,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    StrataComponent
  ]
})
export class SharedTabsComponentsModule {}