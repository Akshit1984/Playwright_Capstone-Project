// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-003 Cart page is available before checkout', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY003CartPageIsAvailableBeforeCheckout();
  });
});