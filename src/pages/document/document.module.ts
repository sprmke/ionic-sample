import { NavbarComponentModule } from './../../components/shared/navbar/navbar.module';
import { DocumentModalPageModule } from './../_modals/document-modal/document-modal.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentPage } from './document';

@NgModule({
  declarations: [
    DocumentPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentPage),
    NavbarComponentModule,
    DocumentModalPageModule
  ],
})
export class DocumentPageModule {}
