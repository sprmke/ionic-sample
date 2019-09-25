import { SharedTabsComponentsModule } from './../../components/shared/tabs/shared-tabs-components.module';
import { NavbarComponentModule } from './../../components/shared/navbar/navbar.module';
import { BuildingComponentsModule } from './../../components/components/building/building-components.module';
import { ParallaxHeaderDirectiveModule } from './../../directives/parallax-header/parallax-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingPage } from './building';

@NgModule({
  declarations: [
    BuildingPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingPage),
    NavbarComponentModule,
    SharedTabsComponentsModule,
    BuildingComponentsModule,
    ParallaxHeaderDirectiveModule,
  ]
})
export class BuildingPageModule {}
