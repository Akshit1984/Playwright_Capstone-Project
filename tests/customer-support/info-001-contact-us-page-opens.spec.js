// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-001 Contact us page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO001ContactUsPageOpens();
  });
});