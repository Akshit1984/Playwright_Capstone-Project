// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-004 Cart footer link is visible', async ({ cartPage }) => {
    await cartPage.verifyCART004CartFooterLinkIsVisible();
  });
});