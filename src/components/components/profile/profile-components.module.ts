import { PropertyGalleryComponent } from './cards/property-gallery/property-gallery';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PropertyGalleryComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    PropertyGalleryComponent
  ]
})
export class ProfileComponentsModule {}