// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-007 Computer product has add to cart controls', async ({ cartPage }) => {
    await cartPage.verifyCART007ComputerProductHasAddToCartControls();
  });
});