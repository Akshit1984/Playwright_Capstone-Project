// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-014 Newsletter subscription controls are visible', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO014NewsletterSubscriptionControlsAreVisible();
  });
});