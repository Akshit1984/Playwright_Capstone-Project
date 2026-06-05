// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-010 Gift card product has message field', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY010GiftCardProductHasMessageField();
  });
});