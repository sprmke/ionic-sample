import { FinancialTypesComponent } from './cards/financial-types/financial-types';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
      FinancialTypesComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    FinancialTypesComponent
  ]
})
export class FinancialComponentsModule {}