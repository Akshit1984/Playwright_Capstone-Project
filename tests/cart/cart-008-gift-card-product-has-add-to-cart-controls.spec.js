// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-008 Gift card product has add to cart controls', async ({ cartPage }) => {
    await cartPage.verifyCART008GiftCardProductHasAddToCartControls();
  });
});