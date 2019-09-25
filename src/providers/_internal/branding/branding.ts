import { HttpClient } from '@angular/common/http';
import { Injectable, Renderer2 } from '@angular/core';


@Injectable()
export class BrandingProvider {

  constructor(public http: HttpClient) {
  }

  renderer: Renderer2;
  _primaryColor = 'p-green';
  _backgroundColor = 'bg-default';
  _branding = {
    id: null,
    strataId: 1,
    bgColor: {
      id: 1,
      value: 'bg-default'
    },
    primary: {
      id: 1,
      value: 'p-green'
    },
    favIconUrl: '',
    iconUrl: '',
    headerLogoUrl: '',
    headerText: ''
  };

  setBranding(branding: any) {
    this._branding = branding;
    localStorage.setItem('theme-branding', JSON.stringify(branding));
  }

  setPrimaryColor(color: string) {
    this.resetPrimaryColor();
    this._primaryColor = color;
    localStorage.setItem('theme-primary-color', color);
    this.renderer.addClass(document.body, color);
  }

  setBackgroundColor(color: string) {
    this.resetBgColor();
    this._backgroundColor = color;
    localStorage.setItem('theme-background-color', color);
    this.renderer.addClass(document.body, color);
  }

  get branding() {
    const branding = JSON.parse(localStorage.getItem('theme-branding'));
    if (branding) {
      this._branding = branding;
    }
    return this._branding;
  }

  get primaryColor(): string {
    const color = localStorage.getItem('theme-primary-color');
    if (color) {
      this._primaryColor = color;
    }
    return this._primaryColor;
  }

  get backgroundColor(): string {
    const color = localStorage.getItem('theme-background-color');
    if (color) {
      this._backgroundColor = color;
    }
    return this._backgroundColor;
  }

  resetPrimaryColor() {
    this.renderer.removeClass(document.body, 'p-red');
    this.renderer.removeClass(document.body, 'p-redorange');
    this.renderer.removeClass(document.body, 'p-orange');
    this.renderer.removeClass(document.body, 'p-green');
    this.renderer.removeClass(document.body, 'p-blue');
    this.renderer.removeClass(document.body, 'p-lightblue');
    this.renderer.removeClass(document.body, 'p-purple');
  }

  resetBgColor() {
    this.renderer.removeClass(document.body, 'bg-default');
    this.renderer.removeClass(document.body, 'bg-light');
    this.renderer.removeClass(document.body, 'bg-dark');
  }

}
