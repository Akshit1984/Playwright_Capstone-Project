// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-006 Laptop product has add to cart controls', async ({ cartPage }) => {
    await cartPage.verifyCART006LaptopProductHasAddToCartControls();
  });
});