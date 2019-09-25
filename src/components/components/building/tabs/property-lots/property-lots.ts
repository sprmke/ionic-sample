import { Component } from '@angular/core';

/**
 * Generated class for the PropertyLotsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-property-lots',
  templateUrl: 'property-lots.html'
})
export class PropertyLotsComponent {

  text: string;

  constructor() {
    console.log('Hello PropertyLotsComponent Component');
    this.text = 'Hello World';
  }

}
