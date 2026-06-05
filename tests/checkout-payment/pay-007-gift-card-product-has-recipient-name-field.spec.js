// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-007 Gift card product has recipient name field', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY007GiftCardProductHasRecipientNameField();
  });
});