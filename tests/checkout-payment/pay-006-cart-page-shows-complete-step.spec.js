// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-006 Cart page shows complete step', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY006CartPageShowsCompleteStep();
  });
});