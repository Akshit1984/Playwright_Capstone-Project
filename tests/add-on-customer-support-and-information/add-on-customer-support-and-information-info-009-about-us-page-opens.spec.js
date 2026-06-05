// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-009 About us page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO009AboutUsPageOpens();
  });
});