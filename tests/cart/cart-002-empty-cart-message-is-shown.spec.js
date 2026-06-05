// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-002 Empty cart message is shown', async ({ cartPage }) => {
    await cartPage.verifyCART002EmptyCartMessageIsShown();
  });
});