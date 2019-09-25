import { Component, Renderer2 } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BrandingProvider } from '../../providers/_internal/branding/branding';

@IonicPage({
  name: 'TabsPage',
  priority: 'off'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homeTab = 'HomePage';
  profileTab = 'ProfilePage';
  notificationsTab = 'NotificationsPage';
  settingsTab = 'SettingsPage';

  constructor(
    public navCtrl: NavController, 
    private brandingProvider: BrandingProvider, 
    private renderer: Renderer2) {
      this.brandingProvider.renderer = this.renderer;
  }

  ngOnInit() {
    this.setBranding();
  }

  setBranding() {
    const branding = this.brandingProvider.branding;
    this.brandingProvider.setPrimaryColor(branding.primary.value);
    this.brandingProvider.setBackgroundColor(branding.bgColor.value);
  }
}
