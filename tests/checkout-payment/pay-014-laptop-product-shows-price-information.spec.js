// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-014 Laptop product shows price information', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY014LaptopProductShowsPriceInformation();
  });
});