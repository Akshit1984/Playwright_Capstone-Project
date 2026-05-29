// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-012 Cart page shows order progress steps', async ({ cartPage }) => {
    await cartPage.verifyCART012CartPageShowsOrderProgressSteps();
  });
});