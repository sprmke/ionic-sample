import { Component } from '@angular/core';

/**
 * Generated class for the PropertyDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-property-details',
  templateUrl: 'property-details.html'
})
export class PropertyDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello PropertyDetailsComponent Component');
    this.text = 'Hello World';
  }

}
