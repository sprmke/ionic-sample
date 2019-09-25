import { Component } from '@angular/core';

/**
 * Generated class for the FinancialComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-financial',
  templateUrl: 'financial.html'
})
export class FinancialComponent {

  text: string;

  constructor() {
    console.log('Hello FinancialComponent Component');
    this.text = 'Hello World';
  }

}
