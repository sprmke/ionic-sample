import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppApiProvider } from './../app-api/app-api';

@Injectable()
export class StrataApiProvider extends AppApiProvider {
  relativeUrl = '/strata';

  public getStratumList(apiUrl: string, params) {
    return this.get(this.relativeUrl + apiUrl, params);
  }

  public getStrata(apiUrl: string, strataId) {
    return this.get(this.relativeUrl + apiUrl + '/' + strataId);
  }

  public saveStrata(apiUrl: string, data: any, params?: any) {
    return this.post(this.relativeUrl + apiUrl, data);
  }

  // public getStrataBuldings(params?: any) {
  //   return this.http.get<BuildingsResponse>('http://stratadev.tooltwist-project.com/api/buildings', this.buildAdditionalOptions(params));
  // }

  public updateStrataStatus(apiUrl: string, id: number) {
    return this.get(apiUrl + '/' + id);
  }

  public getStrataBuldings(params?: any) {
    return this.get('/buildings', params);
  }

}
