// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-015 Footer social links are visible', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO015FooterSocialLinksAreVisible();
  });
});