import { Component, Input } from '@angular/core';

/**
 * Generated class for the RepairComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-card-repair',
  templateUrl: 'repair.html'
})
export class RepairComponent {
  @Input() postType: string;

  constructor() {
  }

}
