// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-013 Book product shows price information', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY013BookProductShowsPriceInformation();
  });
});