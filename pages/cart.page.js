// @ts-check
import { BasePage } from './base.page.js';

export class CartPage extends BasePage {
  async verifyCART001EmptyCartPageOpens() {
    await this.checkPage({ route: '/cart', title: /Shopping Cart/, heading: 'Shopping cart' });
  }

  async verifyCART002EmptyCartMessageIsShown() {
    await this.checkPage({ route: '/cart', text: ['Your Shopping Cart is empty!'] });
  }

  async verifyCART003HeaderShoppingCartLinkIsVisible() {
    await this.checkPage({ route: '/', visible: ['a.ico-cart'], text: ['Shopping cart (0)'] });
  }

  async verifyCART004CartFooterLinkIsVisible() {
    await this.checkPage({ route: '/', visible: ['a[href="/cart"]'], text: ['Shopping cart'] });
  }

  async verifyCART005BookProductHasAddToCartControls() {
    await this.checkPage({ route: '/computing-and-internet', visible: ['.add-to-cart-button', '.qty-input'] });
  }

  async verifyCART006LaptopProductHasAddToCartControls() {
    await this.checkPage({ route: '/141-inch-laptop', visible: ['#add-to-cart-button-31', '.qty-input'] });
  }

  async verifyCART007ComputerProductHasAddToCartControls() {
    await this.checkPage({ route: '/build-your-own-computer', visible: ['#add-to-cart-button-16', '.qty-input'] });
  }

  async verifyCART008GiftCardProductHasAddToCartControls() {
    await this.checkPage({ route: '/25-virtual-gift-card', visible: ['#add-to-cart-button-2', '.qty-input'] });
  }

  async verifyCART009ApparelProductHasCartControls() {
    await this.checkPage({ route: '/blue-jeans', visible: ['.add-to-cart-button', '.qty-input'] });
  }

  async verifyCART010JewelryProductHasCartControls() {
    await this.checkPage({ route: '/create-it-yourself-jewelry', visible: ['.add-to-cart-button', '.qty-input'] });
  }

  async verifyCART011CartPageStillShowsSearchControls() {
    await this.checkPage({ route: '/cart', visible: ['#small-searchterms', '.search-box-button'] });
  }

  async verifyCART012CartPageShowsOrderProgressSteps() {
    await this.checkPage({ route: '/cart', text: ['Cart', 'Address', 'Payment'] });
  }

  async verifyCART013CartPageShowsInformationFooterLinks() {
    await this.checkPage({ route: '/cart', text: ['Sitemap', 'Shipping & Returns'] });
  }

  async verifyCART014CartPageKeepsFooterFollowLinksAvailable() {
    await this.checkPage({ route: '/cart', visible: ['.footer'], text: ['Follow us'] });
  }

  async verifyCART015CartPageHasCheckoutJourneyLabels() {
    await this.checkPage({ route: '/cart', text: ['Shipping', 'Confirm', 'Complete'] });
  }
}
