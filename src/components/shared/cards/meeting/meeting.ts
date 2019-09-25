import { Component, Input } from '@angular/core';

/**
 * Generated class for the MeetingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-card-meeting',
  templateUrl: 'meeting.html'
})
export class MeetingComponent {
  @Input() postType: string;

  constructor() {
  }

}
