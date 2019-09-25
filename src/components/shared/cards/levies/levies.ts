import { Component, Input } from '@angular/core';

/**
 * Generated class for the LeviesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-card-levies',
  templateUrl: 'levies.html'
})
export class LeviesComponent {
  @Input() postType: string;

  constructor() {
  }

}
