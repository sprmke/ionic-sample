import { NavbarComponentModule } from './../../components/shared/navbar/navbar.module';
import { FinancialComponentsModule } from './../../components/components/financial/financial-components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinancialPage } from './financial';

@NgModule({
  declarations: [
    FinancialPage,
  ],
  imports: [
    IonicPageModule.forChild(FinancialPage),
    NavbarComponentModule,
    FinancialComponentsModule
  ],
})
export class FinancialPageModule {}
