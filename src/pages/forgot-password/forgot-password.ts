declare var window;

import { Observable, Subscription } from 'rxjs';
import { Component, Renderer2, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { BrandingProvider } from '../../providers/_internal/branding/branding';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AmplifyService } from 'aws-amplify-angular';
import { LoginApiProvider } from './../../providers/_api/login-api/login-api';
import { LoginProvider } from './../../providers/_pages/login-page/login/login';
import { BuildingsApiProvider } from './../../providers/_api/buildings-api/buildings-api';
import { BasicAlertProvider } from './../../providers/_controllers/basic-alert/basic-alert';
import { PasswordValidator } from '../../utils/validators/password.validator';

@IonicPage({
  priority: 'off'
})
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage implements OnInit {

  form: FormGroup;
  isLoading: boolean = false;
  isNewPasswordForm: boolean = false;
  errorCode: string;
  infoMessage: string;

  currentUser: any;

  showKeyboard = false;
  inputFocus = false;
  private keybaordShowSub: Subscription;
  private keyboardHideSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private amplifyService: AmplifyService,
    private loginApiProvider: LoginApiProvider,
    private loginProvider: LoginProvider,
    private buildingsApiProvider: BuildingsApiProvider,
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public toastCtrl: ToastController, 
    public navParams: NavParams,
    private renderer: Renderer2,
    private brandingProvider: BrandingProvider,
    private basicAlertProvider: BasicAlertProvider) {
      this.brandingProvider.renderer = this.renderer;
  }

  ngOnInit() {
    this.setBranding();
    this.buildForgotPasswordForm();
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  toggleNewPasswordForm(email) {
    this.buildNewPasswordForm(email);
    this.isNewPasswordForm = !this.isNewPasswordForm;
  }

  onCancel() {
    if (!this.isNewPasswordForm) {
      this.navCtrl.setRoot('LoginPage');
    } else {
      this.isNewPasswordForm = !this.isNewPasswordForm;
    }
  }

  showHelper(type) {
    let alert: any;
    if (type == 'verification-code') {
      this.basicAlertProvider.presentAlert({ 
        title: 'Verification code', 
        message: 'Enter the verification code that was sent in your email if you already received one.',
        buttons: [{
          text: 'Request code',
            handler: () => {
              this.isNewPasswordForm = !this.isNewPasswordForm;
            }
          },
          'Ok'
        ]
      });
    } else if (type == 'password') {
      this.basicAlertProvider.presentAlert({
        title: 'Password Details',
        message: 'Password combination must contain atleast 8 characters, uppercase letter, lowercase letter, number and a special character.',
        buttons: ['Ok']
      });
    }
  }

  // ------------------------------------------------------------------------------------
  // Forgot Password
  // ------------------------------------------------------------------------------------

  buildForgotPasswordForm() {
    this.form = this.fb.group({
      'email' : ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(form: FormGroup) {
    console.log('form: ', form);
    if (this.form.valid) {
      if (this.isNewPasswordForm) {
        this.initiateChangePassword();
      } else {
        this.initiateForgotPasswordRequest();
      }
    }
  }

  initiateChangePassword() {
    console.log('initiateChangePassword!!');
    this.toggleLoading();
    const formValue = this.form.value;
    this.amplifyService.auth().forgotPasswordSubmit(formValue.email, formValue.code, formValue.password).then(res => {
      console.log('this success res', res);
      this.forceSignin(formValue.email, formValue.password);
    }, err => {
      console.log('initiateChangePassword err: ', err);
      if (err.message === 'User password cannot be reset in the current state.') {
        this.errorCode = 'CANT_RESET_PASSWORD';
      } else {
        this.errorCode = err.code;
        this.basicAlertProvider.presentAlert({ message: this.errorCode, errorType: true });
      }
      this.toggleLoading();
    });
  }

  forceSignin(username: string, password: string) {
    console.log('forceSignin!!');
    this.amplifyService.auth().signIn(username, password).then(response => {
      this.proccessLogin(response);
    }, error => {
      console.log('forceSignin error: ', error);
      if (error && error.code) {
        this.basicAlertProvider.presentAlert({ message: this.errorCode, errorType: true });
      }
      console.log('error response::', error);
      this.toggleLoading();
    });
  }

  proccessLogin(authResponse: any, form?: FormGroup) {
    console.log('proccessLogin!!');
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
      console.log('proccessLogin authResponse', authResponse);
      const userId = authResponse.username;
      this.getUserInfo(userId);
    }

  }

  initiateForgotPasswordRequest() {
    this.toggleLoading();
    console.log('form submitted!!', this.form.value);
    const email = this.form.value.email;
    this.amplifyService.auth().forgotPassword(email).then(res => {
      console.log('res', res);
      this.infoMessage = 'Please check your email for your verification code.';
      this.basicAlertProvider.presentAlert({ message: this.infoMessage });
      this.toggleNewPasswordForm(email);
      this.toggleLoading();
    }, err => {
      console.log('err', err);
      if (err.message === 'User password cannot be reset in the current state.') {
        this.errorCode = 'CANT_RESET_PASSWORD';
      } else if (err.message === 'User is disabled') {
        this.errorCode = 'CANT_RESET_PASSWORD';
      } else {
        this.errorCode = err.code;
      }
      this.basicAlertProvider.presentAlert({ message: this.errorCode, errorType: true });
      this.toggleLoading();
    });
  }

  buildNewPasswordForm(email) {
    this.form = this.fb.group({
      'email' : ['', [Validators.required, Validators.email]],
      'code': ['', Validators.required],
      'password': ['', [Validators.required, PasswordValidator.correctPattern]],
      'confirmPassword': ['', [Validators.required, PasswordValidator.correctPattern]]
    }, {validator: PasswordValidator.matchPassword});

    if (email) {
      this.form.get('email').setValue(email ? email : '');
    }
  }

  getUserInfo(userId: any) {
    this.loginApiProvider.getUserInfo(userId).subscribe(response => {
      console.log('this user infooo', response);
      this.loginProvider.saveUserInfo(response);
      if (response) {
        this.getBuildingInfo(response.buildings[0].id);
      }
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
    }, error => {
      console.log(error);
    });
  }

  // ------------------------------------------------------------------------------------
  // Branding
  // ------------------------------------------------------------------------------------

  getBranding(strataId) {
    this.loginApiProvider.getBranding(strataId).subscribe(response => {
      this.brandingProvider.setBranding(response);
      this.brandingProvider.setPrimaryColor(response.primary.value);
      this.brandingProvider.setBackgroundColor(response.bgColor.value);
      console.log('branding done!');
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
