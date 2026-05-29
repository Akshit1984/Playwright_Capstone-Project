// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-003 Header shopping cart link is visible', async ({ cartPage }) => {
    await cartPage.verifyCART003HeaderShoppingCartLinkIsVisible();
  });
});