// Core
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

// Ionic native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';

// Components
import { MyApp } from './app.component';

// Modules
import { SidemenuComponentModule } from './../components/shared/sidemenu/sidemenu.module';

// Providers
//-- API
import { StrataApiProvider } from './../providers/_api/strata-api/strata-api';
import { LoginApiProvider } from '../providers/_api/login-api/login-api';
import { BuildingsApiProvider } from '../providers/_api/buildings-api/buildings-api';
//-- Internal
import { BrandingProvider } from '../providers/_internal/branding/branding';
//-- Controllers
import { BasicAlertProvider } from '../providers/_controllers/basic-alert/basic-alert';
import { ToastProvider } from '../providers/_controllers/toast/toast';
//-- Pages
import { LoginProvider } from '../providers/_pages/login-page/login/login';
//-- Utils
import { ArrayUtilProvider } from '../providers/_utils/array-util/array-util';

// Pipes
import { ErrorConverterPipe } from './../pipes/error-converter/error-converter';

// Vendors
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,

    SidemenuComponentModule,
    ionicGalleryModal.GalleryModalModule,
    AmplifyAngularModule,

    IonicModule.forRoot(MyApp, {
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,

    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HAMMER_GESTURE_CONFIG, useClass: ionicGalleryModal.GalleryModalHammerConfig },

    StrataApiProvider,
    LoginApiProvider,
    BuildingsApiProvider,

    BrandingProvider,
    ArrayUtilProvider,

    BasicAlertProvider,
    ToastProvider,

    LoginProvider,
    AmplifyService,
    ErrorConverterPipe,
  ]
})
export class AppModule {}
