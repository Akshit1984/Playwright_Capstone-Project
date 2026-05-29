// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-014 Newsletter subscription controls are visible', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO014NewsletterSubscriptionControlsAreVisible();
  });
});