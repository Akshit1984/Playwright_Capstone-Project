// @ts-check
import { BasePage } from './base.page.js';

export class AuthenticationPage extends BasePage {
  async verifyAUTH001LoginPageOpensWithCorrectTitleAndHeading() {
    await this.checkPage({ route: '/login', title: /Login/, heading: 'Welcome, Please Sign In!' });
  }

  async verifyAUTH002LoginPageShowsEmailAndPasswordFields() {
    await this.checkPage({ route: '/login', visible: ['#Email', '#Password'] });
  }

  async verifyAUTH003LoginPageShowsLoginButton() {
    await this.checkPage({ route: '/login', visible: ['.login-button'], enabled: ['.login-button'] });
  }

  async verifyAUTH004LoginPageShowsRememberMeAndForgotPasswordOptions() {
    await this.checkPage({ route: '/login', visible: ['#RememberMe'], text: ['Forgot password?'] });
  }

  async verifyAUTH005LoginPageShowsRegistrationOptionForNewCustomer() {
    await this.checkPage({ route: '/login', visible: ['.register-button'], text: ['New Customer'] });
  }

  async verifyAUTH006PasswordRecoveryPageOpensCorrectly() {
    await this.checkPage({ route: '/passwordrecovery', title: /Password Recovery/, heading: 'Password recovery' });
  }

  async verifyAUTH007PasswordRecoveryPageHasEmailFieldAndRecoverButton() {
    await this.checkPage({ route: '/passwordrecovery', visible: ['#Email', '.password-recovery-button'] });
  }

  async verifyAUTH008RegisterPageOpensCorrectly() {
    await this.checkPage({ route: '/register', title: /Register/, heading: 'Register' });
  }

  async verifyAUTH009RegisterPageShowsGenderChoices() {
    await this.checkPage({ route: '/register', visible: ['#gender-male', '#gender-female'] });
  }

  async verifyAUTH010RegisterPageShowsPersonalDetailFields() {
    await this.checkPage({ route: '/register', visible: ['#FirstName', '#LastName', '#Email'] });
  }

  async verifyAUTH011RegisterPageShowsPasswordFields() {
    await this.checkPage({ route: '/register', visible: ['#Password', '#ConfirmPassword'] });
  }

  async verifyAUTH012RegisterButtonIsAvailable() {
    await this.checkPage({ route: '/register', visible: ['#register-button'], enabled: ['#register-button'] });
  }

  async verifyAUTH013ProtectedAccountPageRedirectsGuestUserToLogin() {
    await this.checkPage({ route: '/customer/info', title: /Login/, heading: 'Welcome, Please Sign In!' });
  }

  async verifyAUTH014ProtectedOrdersPageRedirectsGuestUserToLogin() {
    await this.checkPage({ route: '/customer/orders', title: /Login/, heading: 'Welcome, Please Sign In!' });
  }

  async verifyAUTH015HeaderExposesLoginAndRegisterLinks() {
    await this.checkPage({ route: '/', visible: ['a[href="/login"]', 'a[href="/register"]'] });
  }
}
