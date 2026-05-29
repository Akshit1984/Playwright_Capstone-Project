// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-010 Jewelry product has cart controls', async ({ cartPage }) => {
    await cartPage.verifyCART010JewelryProductHasCartControls();
  });
});