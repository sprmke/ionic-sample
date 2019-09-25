import { Component, Input } from '@angular/core';

/**
 * Generated class for the ManagerPostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-card-manager-post',
  templateUrl: 'manager-post.html'
})
export class ManagerPostComponent {
  @Input() postType: string;

  constructor() {
  }

}
