// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-008 Gift card product has recipient email field', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY008GiftCardProductHasRecipientEmailField();
  });
});