import { Component } from '@angular/core';

/**
 * Generated class for the PropertyInsuranceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-property-insurance',
  templateUrl: 'property-insurance.html'
})
export class PropertyInsuranceComponent {

  text: string;

  constructor() {
    console.log('Hello PropertyInsuranceComponent Component');
    this.text = 'Hello World';
  }

}
