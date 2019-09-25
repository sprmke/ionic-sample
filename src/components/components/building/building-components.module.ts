import { PropertyLotsComponent } from './tabs/property-lots/property-lots';
import { PropertyInsuranceComponent } from './tabs/property-insurance/property-insurance';
import { PropertyDetailsComponent } from './tabs/property-details/property-details';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PropertyDetailsComponent,
    PropertyInsuranceComponent,
    PropertyLotsComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    PropertyDetailsComponent,
    PropertyInsuranceComponent,
    PropertyLotsComponent
  ]
})
export class BuildingComponentsModule {}