// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-009 About us page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO009AboutUsPageOpens();
  });
});