import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment as env } from '../../../environments/environment';

@Injectable()
export abstract class AppApiProvider {
  protected baseUrl = env.baseUrl;
  protected apiUrl = env.apiUrl;
  protected versionUrl = env.versionUrl;

  private httpOptions: any = {};

  constructor(public http: HttpClient) {
  }

  protected get(relativeUrl: string, params?: any, otherProperties?: any): Observable<any> {
    const httpOptions = this.buildAdditionalOptions(params, otherProperties);
    return this.http.get<Response>(this.buildUrl(relativeUrl), httpOptions);
  }

  protected post(relativeUrl: string, data: any, params?: any, otherProperties?: any): Observable<any> {
    const httpOptions = this.buildAdditionalOptions(params, otherProperties);
    return this.http.post<Response>(this.buildUrl(relativeUrl), data, httpOptions);
  }

  protected put(relativeUrl: string, data: any, params?: any): Observable<any> {
    const httpOptions = this.buildAdditionalOptions(params);
    return this.http.put<Response>(this.buildUrl(relativeUrl), data, httpOptions);
  }

  protected delete(relativeUrl: string, params?: any): Observable<any> {
    const httpOptions = this.buildAdditionalOptions(params);
    return this.http.delete<Response>(this.buildUrl(relativeUrl), httpOptions);
  }

  buildAdditionalOptions(params: any, otherProperties?: any) {
    const httpOptions = {};
    if (params) {
      httpOptions['params'] = this.parseParams(params);
    }

    let headers = new HttpHeaders();

    headers = headers.append('x-api-key', '');
    // headers = headers.append('strataId', '1');
    if (params && params.strataId) {
      headers = headers.append('strataId', params.strataId);
    } else {
      headers = headers.append('strataId', '1');
    }


    httpOptions['headers'] = headers;

    if (otherProperties && otherProperties.responseType) {
      httpOptions['responseType'] = otherProperties.responseType;
    }

    console.log('this response type::', httpOptions);
    return httpOptions;
  }


  protected buildUrl(relativeUrl?): string {
    console.log('this api url::::::', this.baseUrl + this.apiUrl + this.versionUrl + relativeUrl);
    return this.baseUrl + this.apiUrl + this.versionUrl + relativeUrl;
  }

  private parseParams(params: any) {
    let newParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          if (key !== 'strataId' ) {
            const obj = params[key];
            newParams = newParams.append(key.toString(), obj);
          }
        }
      }
    }
    // console.log('this new params::', newParams.toString);
    return newParams ? newParams : {};
  }

}
