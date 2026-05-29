// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-004 Cart page shows payment step', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY004CartPageShowsPaymentStep();
  });
});