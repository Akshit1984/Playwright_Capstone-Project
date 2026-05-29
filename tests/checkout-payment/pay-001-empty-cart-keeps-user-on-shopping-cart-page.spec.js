// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-001 Empty cart keeps user on shopping cart page', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY001EmptyCartKeepsUserOnShoppingCartPage();
  });
});