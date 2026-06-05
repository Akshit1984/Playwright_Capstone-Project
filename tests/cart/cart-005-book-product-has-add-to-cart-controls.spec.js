// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-005 Book product has add to cart controls', async ({ cartPage }) => {
    await cartPage.verifyCART005BookProductHasAddToCartControls();
  });
});