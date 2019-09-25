import { SharedCardsComponentsModule } from './../../components/shared/cards/shared-cards-components.module';
import { NavbarComponentModule } from './../../components/shared/navbar/navbar.module';
import { OpenItemsModalPageModule } from './../_modals/open-items-modal/open-items-modal.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenItemsPage } from './open-items';

@NgModule({
  declarations: [
    OpenItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenItemsPage),
    NavbarComponentModule,
    SharedCardsComponentsModule,
    OpenItemsModalPageModule
  ],
})
export class OpenItemsPageModule {}
