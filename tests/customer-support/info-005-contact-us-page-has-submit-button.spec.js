// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-005 Contact us page has submit button', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO005ContactUsPageHasSubmitButton();
  });
});