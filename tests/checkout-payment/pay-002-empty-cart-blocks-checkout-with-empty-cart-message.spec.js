// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-002 Empty cart blocks checkout with empty cart message', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY002EmptyCartBlocksCheckoutWithEmptyCartMessage();
  });
});