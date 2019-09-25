import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppApiProvider } from '../app-api/app-api';

@Injectable()
export class LoginApiProvider extends AppApiProvider {

  getUserInfo(userId: string) {
    return this.get('/users/' + userId);
  }

  getBranding(strataId) {
    return this.get('/strata/' + strataId + '/branding');
  }

}
