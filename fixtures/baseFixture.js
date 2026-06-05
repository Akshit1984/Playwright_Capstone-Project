// @ts-check
import { test as base, expect } from '@playwright/test';
import { AuthenticationPage } from '../pages/authentication.page.js';
import { ProductPage } from '../pages/product.page.js';
import { CartPage } from '../pages/cart.page.js';
import { WishlistComparePage } from '../pages/wishlistCompare.page.js';
import { UserProfilePage } from '../pages/userProfile.page.js';
import { AddressShippingPage } from '../pages/addressShipping.page.js';
import { CheckoutPaymentPage } from '../pages/checkoutPayment.page.js';
import { CustomerSupportPage } from '../pages/customerSupport.page.js';
import { baseUrl } from '../data/demoWebShopData.js';

export const test = base.extend({
  workerPage: [
    async ({ browser }, use) => {
      const context = await browser.newContext({ baseURL: baseUrl });
      const page = await context.newPage();

      await use(page);
      await context.close();
    },
    { scope: 'worker' },
  ],
  authenticationPage: async ({ workerPage }, use) => {
    await use(new AuthenticationPage(workerPage));
  },
  productPage: async ({ workerPage }, use) => {
    await use(new ProductPage(workerPage));
  },
  cartPage: async ({ workerPage }, use) => {
    await use(new CartPage(workerPage));
  },
  wishlistComparePage: async ({ workerPage }, use) => {
    await use(new WishlistComparePage(workerPage));
  },
  userProfilePage: async ({ workerPage }, use) => {
    await use(new UserProfilePage(workerPage));
  },
  addressShippingPage: async ({ workerPage }, use) => {
    await use(new AddressShippingPage(workerPage));
  },
  checkoutPaymentPage: async ({ workerPage }, use) => {
    await use(new CheckoutPaymentPage(workerPage));
  },
  customerSupportPage: async ({ workerPage }, use) => {
    await use(new CustomerSupportPage(workerPage));
  },
});

export { expect };
