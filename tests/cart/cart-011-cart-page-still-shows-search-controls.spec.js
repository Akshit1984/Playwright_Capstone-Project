// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-011 Cart page still shows search controls', async ({ cartPage }) => {
    await cartPage.verifyCART011CartPageStillShowsSearchControls();
  });
});