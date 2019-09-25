declare var window;

import { Observable, Subscription } from 'rxjs';
import { Component, Renderer2, OnInit } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { BrandingProvider } from '../../providers/_internal/branding/branding';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmplifyService } from 'aws-amplify-angular';
import { LoginApiProvider } from './../../providers/_api/login-api/login-api';
import { LoginProvider } from './../../providers/_pages/login-page/login/login';
import { BuildingsApiProvider } from './../../providers/_api/buildings-api/buildings-api';
import { PasswordValidator } from '../../utils/validators/password.validator';
import { ErrorConverterPipe } from './../../pipes/error-converter/error-converter';
import { BasicAlertProvider } from './../../providers/_controllers/basic-alert/basic-alert';
import { ArrayUtilProvider } from './../../providers/_utils/array-util/array-util';

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  form: FormGroup;
  isLoading: boolean = false;
  isNewPasswordForm: boolean = false;

  currentUser: any;

  showKeyboard = false;
  inputFocus = false;
  private keybaordShowSub: Subscription;
  private keyboardHideSub: Subscription;

  constructor(
    private appCtrl: App,
    private fb: FormBuilder,
    private amplifyService: AmplifyService,
    private loginApiProvider: LoginApiProvider,
    private loginProvider: LoginProvider,
    private buildingsApiProvider: BuildingsApiProvider,
    private errorConverterPipe: ErrorConverterPipe,
    private arrayUtilProvider: ArrayUtilProvider,
    public navCtrl: NavController, 
    public forgotCtrl: AlertController, 
    public toastCtrl: ToastController, 
    public navParams: NavParams,
    private renderer: Renderer2,
    private brandingProvider: BrandingProvider,
    private basicAlertProvider: BasicAlertProvider) {
      this.brandingProvider.renderer = this.renderer;
  }

  ngOnInit() {
    this.setBranding();
    this.buildLoginForm();
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  toggleNewPasswordForm() {
    this.isNewPasswordForm = !this.isNewPasswordForm;
   }

  buildLoginForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(form: FormGroup) {
    console.log('form: ', form);
    if (form.valid) {
      if (this.isNewPasswordForm) {
        this.updatePassword(form);
      } else {
        this.login(form);
      }
    }
  }

  updatePassword(form: FormGroup) {
    if (form.valid) {
      this.toggleLoading();
      const password = form.get('password').value;
      this.amplifyService.auth().completeNewPassword(this.currentUser, password, {}).then(response => {
        console.log('this response::', response);
        this.forceSignin(response.username, password);
      })
      .catch(error => {
        console.log('this error::', error);
        this.toggleLoading();
      });
    }
  }

  forceSignin(username: string, password: string) {
    this.amplifyService.auth().signIn(username, password).then(response => {
      this.proccessLogin(response);
    }, error => {
      if (error && error.code) {
        this.basicAlertProvider.presentAlert({ message: error.code, errorType: true });
      }
      console.log('error response::', error);
      this.toggleLoading();
    });
  }

  login (form: FormGroup) {
    console.log('logging in!!');
    const formValue = form.value;
    console.log('this farm value::', formValue);
    this.toggleLoading();
    this.amplifyService.auth().signIn(formValue.email, formValue.password).then(response => {
      console.log('this response::', response);
      this.setCurrentUser(response);
      this.handleUserChallenge(response, form);
      localStorage.setItem('loggedIn', 'true');
    }).catch(errorResponse => {
      if (errorResponse && errorResponse.code) {
        this.basicAlertProvider.presentAlert({ message: errorResponse.code, errorType: true });
        this.toggleLoading();
      }
      console.log('error response::', errorResponse);
    });
  }

  handleUserChallenge(authResponse: any, form: FormGroup) {
    if (authResponse && authResponse.challengeName === 'NEW_PASSWORD_REQUIRED') {
      this.startNewPasswordChallenge(authResponse.challengeName);
    } else {
      this.proccessLogin(authResponse, form);
    }
  }

  startNewPasswordChallenge(challengeName: string) {
    this.basicAlertProvider.presentAlert({ message: challengeName, errorType: true });
    this.toggleNewPasswordForm();
    this.buildNewPasswordForm();
    this.toggleLoading();
  }

  buildNewPasswordForm() {
    this.form = this.fb.group({
      'password': ['', [Validators.required, PasswordValidator.correctPattern]],
      'confirmPassword': ['', Validators.required]
    }, {validator: PasswordValidator.matchPassword});
  }

  proccessLogin(authResponse: any, form?: FormGroup) {
    let strataId = 1;
    localStorage.setItem('buildingId', '55');
    // lot Ids for 55
    localStorage.setItem('lots', '[220]');
    if (form && form.value.email === 'owner@test.cc') {
      strataId = 2;
      localStorage.setItem('buildingId', '70');
      localStorage.setItem('lots', '[276]');
    }
    this.getBranding(strataId);
    console.log('this auth response::', authResponse);
    if (authResponse) {
      const userId = authResponse.username;
      this.getUserInfo(userId);
    }
  }

  getUserInfo(userId: any) {
    this.loginApiProvider.getUserInfo(userId).subscribe(response => {
      console.log('this user infooo', response);
      this.loginProvider.saveUserInfo(response);
      let userBuildings = response ? response.buildings : null;
      userBuildings = userBuildings.sort(this.arrayUtilProvider.dynamicSort('buildingName', 'asc'));
      if (response) {
        this.getBuildingInfo(response.buildings[0].id);
      }
    },
    error => {
      console.log('getUserInfo:::::', error);
    });
  }

  getBuildingInfo(id) {
    const buildingParam = {
      id: id,
      fetch: true
    };
    this.buildingsApiProvider.getBuildings(buildingParam).subscribe(response => {
      const buildingLots = this.loginProvider.getUserLotsForBuilding(id);
      response['lots'] = buildingLots;
      localStorage.setItem('buildingInfo', JSON.stringify(response));
      this.loginProvider.authenticate();

      // if (this.previousRoute) {
      //   this.router.navigateByUrl(this.previousRoute);
      //   // window.location.href = this.previousRoute;
      // } else {
      //   this.router.navigateByUrl('');
      // }

      this.navCtrl.setRoot('TabsPage');
    }, error => {
      console.log(error);
    });
  }

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  forgotPassword() {
    this.navCtrl.push('ForgotPasswordPage');
  }

  getBranding(strataId) {
    this.loginApiProvider.getBranding(strataId).subscribe(response => {
      this.brandingProvider.setBranding(response);
      this.brandingProvider.setPrimaryColor(response.primary.value);
      this.brandingProvider.setBackgroundColor(response.bgColor.value);
      console.log('branding done!');
    },
    error => {
      console.log('getBranding:::::', error);
    });
  }

  setBranding() {
    const branding = this.brandingProvider.branding;
    if (branding) {
      this.brandingProvider.setPrimaryColor(branding.primary.value);
      this.brandingProvider.setBackgroundColor(branding.bgColor.value);
    } else {
      this.brandingProvider.setBackgroundColor('bg-default');
      this.brandingProvider.setPrimaryColor('p-default');
    }
  }



  // ------------------------------------------------------------------------------------
  // Animation for login input focus and blur
  // ------------------------------------------------------------------------------------

  onInputFocus() {
    this.showKeyboard = true;
    this.inputFocus = true;
  }

  onInputBlur() {
    this.showKeyboard = false;
    this.inputFocus = false;
  }

  ionViewWillEnter() {
		this.addKeyboardListeners();
	}

	ionViewWillLeave() {
		this.removeKeyboardListeners();
	}

	private addKeyboardListeners() {
		this.keybaordShowSub = Observable.fromEvent(window, 'keyboardWillShow').subscribe(e => {
      this.showKeyboard = true;
		});

		this.keyboardHideSub = Observable.fromEvent(window, 'keyboardWillHide').subscribe(e => {
      this.showKeyboard = false;
		});
	}

	private removeKeyboardListeners() {
		if (this.keybaordShowSub) this.keybaordShowSub.unsubscribe();
		if (this.keyboardHideSub) this.keyboardHideSub.unsubscribe();
  }
}
