import { Component } from '@angular/core';

@Component({
  selector: 'app-strata',
  templateUrl: 'strata.html'
})
export class StrataComponent {

  text: string;

  constructor() {
    console.log('Hello StrataComponent Component');
    this.text = 'Hello World';
  }

}
