import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppApiProvider } from '../app-api/app-api';

@Injectable()
export class BuildingsApiProvider extends AppApiProvider {
  relativeUrl = '/buildings';

  getBuildings(params: any) {
    return this.get(this.relativeUrl + '/' + params.id, params);
  }
}
