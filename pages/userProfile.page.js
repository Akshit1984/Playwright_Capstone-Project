// @ts-check
import { BasePage } from './base.page.js';

export class UserProfilePage extends BasePage {
  async verifyUSER001MyAccountPageRequiresLoginForGuest() {
    await this.checkPage({ route: '/customer/info', heading: 'Welcome, Please Sign In!' });
  }

  async verifyUSER002OrderHistoryPageRequiresLoginForGuest() {
    await this.checkPage({ route: '/customer/orders', heading: 'Welcome, Please Sign In!' });
  }

  async verifyUSER003AddressesPageRequiresLoginForGuest() {
    await this.checkPage({ route: '/customer/addresses', heading: 'Welcome, Please Sign In!' });
  }

  async verifyUSER004LoginPageSupportsReturningCustomerSection() {
    await this.checkPage({ route: '/login', visible: ['#Email'], text: ['Returning Customer'] });
  }

  async verifyUSER005FooterExposesMyAccountLink() {
    await this.checkPage({ route: '/', visible: ['a[href="/customer/info"]'], text: ['My account'] });
  }

  async verifyUSER006FooterExposesOrdersLink() {
    await this.checkPage({ route: '/', visible: ['a[href="/customer/orders"]'], text: ['Orders'] });
  }

  async verifyUSER007FooterExposesAddressesLink() {
    await this.checkPage({ route: '/', visible: ['a[href="/customer/addresses"]'], text: ['Addresses'] });
  }

  async verifyUSER008RegisterPageShowsAccountCreationForm() {
    await this.checkPage({ route: '/register', heading: 'Register', visible: ['#register-button'] });
  }

  async verifyUSER009RegisterPageShowsPersonalDetailsFields() {
    await this.checkPage({ route: '/register', visible: ['#FirstName', '#LastName'] });
  }

  async verifyUSER010RegisterPageShowsEmailField() {
    await this.checkPage({ route: '/register', visible: ['#Email'] });
  }

  async verifyUSER011RegisterPageShowsPasswordSetupFields() {
    await this.checkPage({ route: '/register', visible: ['#Password', '#ConfirmPassword'] });
  }

  async verifyUSER012LoginPageProvidesRegisterButtonForNewUser() {
    await this.checkPage({ route: '/login', visible: ['.register-button'], text: ['New Customer'] });
  }

  async verifyUSER013LoginPageProvidesForgotPasswordLink() {
    await this.checkPage({ route: '/login', text: ['Forgot password?'] });
  }

  async verifyUSER014PasswordRecoveryPageSupportsAccountRecovery() {
    await this.checkPage({ route: '/passwordrecovery', visible: ['#Email', '.password-recovery-button'] });
  }

  async verifyUSER015SitemapIncludesAccountLinks() {
    await this.checkPage({ route: '/sitemap', text: ['My account', 'Orders'] });
  }
}
