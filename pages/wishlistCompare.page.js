// @ts-check
import { BasePage } from './base.page.js';

export class WishlistComparePage extends BasePage {
  async verifyWISH001WishlistPageOpens() {
    await this.checkPage({ route: '/wishlist', title: /Wishlist/, heading: 'Wishlist' });
  }

  async verifyWISH002EmptyWishlistMessageIsShown() {
    await this.checkPage({ route: '/wishlist', text: ['The wishlist is empty!'] });
  }

  async verifyWISH003HeaderWishlistLinkIsVisible() {
    await this.checkPage({ route: '/', visible: ['a.ico-wishlist'], text: ['Wishlist (0)'] });
  }

  async verifyWISH004GiftCardProductHasWishlistButton() {
    await this.checkPage({ route: '/25-virtual-gift-card', visible: ['#add-to-wishlist-button-2'] });
  }

  async verifyWISH005ComputerProductHasCompareButton() {
    await this.checkPage({ route: '/build-your-own-computer', visible: ['.add-to-compare-list-button'] });
  }

  async verifyWISH006LaptopProductHasCompareButton() {
    await this.checkPage({ route: '/141-inch-laptop', visible: ['.add-to-compare-list-button'] });
  }

  async verifyWISH007CompareProductsPageOpens() {
    await this.checkPage({ route: '/compareproducts', title: /Compare Products/, text: ['Compare products'] });
  }

  async verifyWISH008RecentlyViewedProductsPageOpens() {
    await this.checkPage({ route: '/recentlyviewedproducts', title: /Recently Viewed Products/, text: ['Recently viewed products'] });
  }

  async verifyWISH009NewProductsPageOpens() {
    await this.checkPage({ route: '/newproducts', title: /Recently Added Products/, minimum: [['.product-grid .item-box', 5]] });
  }

  async verifyWISH010ProductPageExposesEmailAFriendAction() {
    await this.checkPage({ route: '/141-inch-laptop', visible: ['.email-a-friend-button'] });
  }

  async verifyWISH011EmailAFriendPageOpens() {
    await this.checkPage({ route: '/productemailafriend/31', title: /Email A Friend/, text: ['Email a friend'] });
  }

  async verifyWISH012EmailAFriendFormHasFriendEmailField() {
    await this.checkPage({ route: '/productemailafriend/31', visible: ['#FriendEmail', '#YourEmailAddress'] });
  }

  async verifyWISH013EmailAFriendFormHasMessageAndSendButton() {
    await this.checkPage({ route: '/productemailafriend/31', visible: ['#PersonalMessage', '.send-email-a-friend-button'] });
  }

  async verifyWISH014CompareProductsFooterLinkIsAvailable() {
    await this.checkPage({ route: '/', visible: ['a[href="/compareproducts"]'], text: ['Compare products list'] });
  }

  async verifyWISH015WishlistFooterLinkIsAvailable() {
    await this.checkPage({ route: '/', visible: ['a[href="/wishlist"]'], text: ['Wishlist'] });
  }
}
