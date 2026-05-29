// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-003 Contact us page has email field', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO003ContactUsPageHasEmailField();
  });
});