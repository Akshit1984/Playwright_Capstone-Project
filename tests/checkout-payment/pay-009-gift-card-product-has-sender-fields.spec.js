// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-009 Gift card product has sender fields', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY009GiftCardProductHasSenderFields();
  });
});