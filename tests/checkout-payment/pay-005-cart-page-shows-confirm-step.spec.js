// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Checkout and payment coverage', () => {
  test('PAY-005 Cart page shows confirm step', async ({ checkoutPaymentPage }) => {
    await checkoutPaymentPage.verifyPAY005CartPageShowsConfirmStep();
  });
});