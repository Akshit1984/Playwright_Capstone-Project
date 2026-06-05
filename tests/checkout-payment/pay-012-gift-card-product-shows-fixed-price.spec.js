// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-012 Gift card product shows fixed price', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY012GiftCardProductShowsFixedPrice();
  });
});