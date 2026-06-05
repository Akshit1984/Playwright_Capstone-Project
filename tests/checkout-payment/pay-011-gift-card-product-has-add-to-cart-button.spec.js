// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-011 Gift card product has add to cart button', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY011GiftCardProductHasAddToCartButton();
  });
});