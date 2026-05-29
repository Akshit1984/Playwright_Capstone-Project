// @ts-check
import { BasePage } from './base.page.js';

export class AddressShippingPage extends BasePage {
  async verifyADDR001ShippingReturnsPageOpens() {
    await this.checkPage({ route: '/shipping-returns', title: /Shipping/, heading: 'Shipping & Returns' });
  }

  async verifyADDR002ShippingReturnsPageHasCustomerServiceContext() {
    await this.checkPage({ route: '/shipping-returns', text: ['Shipping & Returns', 'Customer service'] });
  }

  async verifyADDR003GuestAddressesPageRedirectsToLogin() {
    await this.checkPage({ route: '/customer/addresses', heading: 'Welcome, Please Sign In!' });
  }

  async verifyADDR004BookProductDisplaysFreeShipping() {
    await this.checkPage({ route: '/computing-and-internet', text: ['Free shipping'] });
  }

  async verifyADDR005ScienceProductDisplaysFreeShipping() {
    await this.checkPage({ route: '/science', text: ['Free shipping'] });
  }

  async verifyADDR006HealthBookProductDisplaysDeliveryDate() {
    await this.checkPage({ route: '/health', text: ['Delivery date: 1-2 days'] });
  }

  async verifyADDR007LaptopProductShowsInStockAvailability() {
    await this.checkPage({ route: '/141-inch-laptop', text: ['Availability: In stock'] });
  }

  async verifyADDR008SmartphoneProductShowsInStockAvailability() {
    await this.checkPage({ route: '/smartphone', text: ['Availability: In stock'] });
  }

  async verifyADDR009BlueJeansProductShowsInStockAvailability() {
    await this.checkPage({ route: '/blue-jeans', text: ['Availability: In stock'] });
  }

  async verifyADDR010ShoppingCartShowsAddressStep() {
    await this.checkPage({ route: '/cart', text: ['Address'] });
  }

  async verifyADDR011ShoppingCartShowsShippingStep() {
    await this.checkPage({ route: '/cart', text: ['Shipping'] });
  }

  async verifyADDR012FooterHasShippingReturnsLink() {
    await this.checkPage({ route: '/', visible: ['a[href="/shipping-returns"]'], text: ['Shipping & Returns'] });
  }

  async verifyADDR013SitemapIncludesShippingReturnsLink() {
    await this.checkPage({ route: '/sitemap', visible: ['a[href="/shipping-returns"]'], text: ['Shipping & Returns'] });
  }

  async verifyADDR014CartPageHasCheckoutProgressSection() {
    await this.checkPage({ route: '/cart', visible: ['.order-progress'], text: ['Cart'] });
  }

  async verifyADDR015ShippingPageKeepsInformationLinksAvailable() {
    await this.checkPage({ route: '/shipping-returns', text: ['Privacy Notice', 'Conditions of Use'] });
  }
}
