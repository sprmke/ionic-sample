import { Component, Input } from '@angular/core';

/**
 * Generated class for the PaymentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-card-payment',
  templateUrl: 'payment.html'
})
export class PaymentComponent {
  @Input() postType: string;

  constructor() {
  }

}
