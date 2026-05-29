// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-002 Contact us page has full name field', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO002ContactUsPageHasFullNameField();
  });
});