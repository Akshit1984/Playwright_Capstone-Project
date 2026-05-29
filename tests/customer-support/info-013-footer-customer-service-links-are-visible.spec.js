// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-013 Footer customer service links are visible', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO013FooterCustomerServiceLinksAreVisible();
  });
});