// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-013 Cart page shows information footer links', async ({ cartPage }) => {
    await cartPage.verifyCART013CartPageShowsInformationFooterLinks();
  });
});