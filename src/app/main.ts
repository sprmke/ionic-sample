import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { environment } from '../environments/environment';
import Amplify from 'aws-amplify';

if (environment.production) {
    enableProdMode();
    if (window) {
        window.console.log = function() {};
    }
}

platformBrowserDynamic().bootstrapModule(AppModule);

Amplify.configure({
    // Auth: {

    //     // REQUIRED - Amazon Cognito Region
    //     region: 'ap-southeast-1',

    //     // OPTIONAL - Amazon Cognito User Pool ID
    //     userPoolId: 'ap-southeast-1_L8MAt29MT',

    //     // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    //     userPoolWebClientId: '5ti8o1lu27kgrmo4qll8o3d9p5',

    // }
    Auth: {

      // REQUIRED - Amazon Cognito Region
      region: 'ap-southeast-1',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'ap-southeast-1_qG7ZMGHxT',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: '6ba2p7bu7jc53igs74arkjnqpq',

  }
});