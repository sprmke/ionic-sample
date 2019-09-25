import { AmplifyService } from 'aws-amplify-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginProvider {

  isLoggedIn = false;
  rememberUser = false;
  authError: string;

  constructor(
    private amplifyService: AmplifyService
  ) { }

  get status() {
    return this.isLoggedIn;
  }

  login (data) {
    this.isLoggedIn = true;
    this.rememberUser = data.rememberUser;
    localStorage.setItem('isLoggedIn', this.isLoggedIn + '');
    localStorage.setItem('rememberUser', data.rememberUser);
  }
  authenticate() {
    this.isLoggedIn = true;
  }

  setAuthError(error: string) {
    this.authError = error;
  }

  getAuthError() {
    return this.authError;
  }

  saveUserInfo(userInfo: any) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  getUserLotsForBuilding(buildingId: any): Array<any> {
    // debugger
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const buildingList: Array<any> = userInfo.buildings;
    const lotBuilding: Array<any> = buildingList.filter(building => building.id === Number(buildingId));
    console.log('this user lots', lotBuilding[0].lots);
    return lotBuilding[0].lots;
  }

  getLotInfo(lotId: number) {
    const buildingInfo = JSON.parse(localStorage.getItem('buildingInfo'));
    const buildingLots: Array<any> = buildingInfo.lots;
    const filteredLots = buildingLots.filter(lot => lot.id === lotId);
    return filteredLots[0];
  }

}
