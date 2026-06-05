// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-015 Cart page has checkout journey labels', async ({ cartPage }) => {
    await cartPage.verifyCART015CartPageHasCheckoutJourneyLabels();
  });
});