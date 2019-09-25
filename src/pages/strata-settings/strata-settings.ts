import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-strata-settings',
  templateUrl: 'strata-settings.html',
})
export class StrataSettingsPage {
  strataSettingsSegment = 'theme';

  constructor() {}

}
