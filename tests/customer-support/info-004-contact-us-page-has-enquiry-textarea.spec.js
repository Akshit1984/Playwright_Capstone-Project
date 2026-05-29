// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-004 Contact us page has enquiry textarea', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO004ContactUsPageHasEnquiryTextarea();
  });
});