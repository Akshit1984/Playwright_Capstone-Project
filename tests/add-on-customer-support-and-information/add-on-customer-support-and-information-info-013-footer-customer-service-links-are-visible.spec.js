// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-013 Footer customer service links are visible', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO013FooterCustomerServiceLinksAreVisible();
  });
});