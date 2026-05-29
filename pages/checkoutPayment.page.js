// @ts-check
import { BasePage } from './base.page.js';

export class CheckoutPaymentPage extends BasePage {
  async verifyPAY001EmptyCartKeepsUserOnShoppingCartPage() {
    await this.checkPage({ route: '/cart', heading: 'Shopping cart' });
  }

  async verifyPAY002EmptyCartBlocksCheckoutWithEmptyCartMessage() {
    await this.checkPage({ route: '/cart', text: ['Your Shopping Cart is empty!'] });
  }

  async verifyPAY003CartPageIsAvailableBeforeCheckout() {
    await this.checkPage({ route: '/cart', text: ['Cart', 'Address'] });
  }

  async verifyPAY004CartPageShowsPaymentStep() {
    await this.checkPage({ route: '/cart', text: ['Payment'] });
  }

  async verifyPAY005CartPageShowsConfirmStep() {
    await this.checkPage({ route: '/cart', text: ['Confirm'] });
  }

  async verifyPAY006CartPageShowsCompleteStep() {
    await this.checkPage({ route: '/cart', text: ['Complete'] });
  }

  async verifyPAY007GiftCardProductHasRecipientNameField() {
    await this.checkPage({ route: '/25-virtual-gift-card', visible: ['#giftcard_2_RecipientName'] });
  }

  async verifyPAY008GiftCardProductHasRecipientEmailField() {
    await this.checkPage({ route: '/25-virtual-gift-card', visible: ['#giftcard_2_RecipientEmail'] });
  }

  async verifyPAY009GiftCardProductHasSenderFields() {
    await this.checkPage({ route: '/25-virtual-gift-card', visible: ['#giftcard_2_SenderName', '#giftcard_2_SenderEmail'] });
  }

  async verifyPAY010GiftCardProductHasMessageField() {
    await this.checkPage({ route: '/25-virtual-gift-card', visible: ['#giftcard_2_Message'] });
  }

  async verifyPAY011GiftCardProductHasAddToCartButton() {
    await this.checkPage({ route: '/25-virtual-gift-card', visible: ['#add-to-cart-button-2'] });
  }

  async verifyPAY012GiftCardProductShowsFixedPrice() {
    await this.checkPage({ route: '/25-virtual-gift-card', text: ['25.00'] });
  }

  async verifyPAY013BookProductShowsPriceInformation() {
    await this.checkPage({ route: '/computing-and-internet', text: ['Price: 10.00'] });
  }

  async verifyPAY014LaptopProductShowsPriceInformation() {
    await this.checkPage({ route: '/141-inch-laptop', text: ['1590.00'] });
  }

  async verifyPAY015SmartphoneProductShowsPriceInformation() {
    await this.checkPage({ route: '/smartphone', text: ['100.00'] });
  }
}
