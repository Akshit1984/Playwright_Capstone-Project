// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-001 Empty cart page opens', async ({ cartPage }) => {
    await cartPage.verifyCART001EmptyCartPageOpens();
  });
});