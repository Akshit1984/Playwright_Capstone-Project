// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-004 Contact us page has enquiry textarea', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO004ContactUsPageHasEnquiryTextarea();
  });
});