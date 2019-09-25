import { NavbarComponentModule } from './../../components/shared/navbar/navbar.module';
import { FaqsModalPageModule } from './../_modals/faqs-modal/faqs-modal.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqsPage } from './faqs';

@NgModule({
  declarations: [
    FaqsPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqsPage),
    NavbarComponentModule,
    FaqsModalPageModule
  ],
})
export class FaqsPageModule {}
