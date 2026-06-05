// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-005 Contact us page has submit button', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO005ContactUsPageHasSubmitButton();
  });
});