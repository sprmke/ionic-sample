import { SharedCardsComponentsModule } from './../../shared/cards/shared-cards-components.module';
import { NewsfeedComponent } from './tabs/newsfeed/newsfeed';
import { FinancialComponent } from './tabs/financial/financial';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
      FinancialComponent,
      NewsfeedComponent
  ],
  imports: [
    IonicModule,
    SharedCardsComponentsModule
  ],
  exports: [
    FinancialComponent,
    NewsfeedComponent
  ]
})
export class HomeComponentsModule {}