// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-002 Contact us page has full name field', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO002ContactUsPageHasFullNameField();
  });
});