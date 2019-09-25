import { Component , Input} from '@angular/core';

/**
 * Generated class for the FinancialTypesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-financial-types',
  templateUrl: 'financial-types.html'
})
export class FinancialTypesComponent {
  @Input() balance: any;
  @Input() balanceIsLoading: Boolean;
  @Input() label: String;
  @Input() icon: String;


  constructor() {
  }

}
