// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-009 Apparel product has cart controls', async ({ cartPage }) => {
    await cartPage.verifyCART009ApparelProductHasCartControls();
  });
});