// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-015 Smartphone product shows price information', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY015SmartphoneProductShowsPriceInformation();
  });
});