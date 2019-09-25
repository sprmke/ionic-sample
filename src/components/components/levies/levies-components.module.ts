import { LevyTotalInfoComponent } from './cards/levy-total-info/levy-total-info';
import { LevyInfoComponent } from './cards/levy-info/levy-info';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LevyInfoComponent,
    LevyTotalInfoComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    LevyInfoComponent,
    LevyTotalInfoComponent
  ]
})
export class LeviesComponentsModule {}