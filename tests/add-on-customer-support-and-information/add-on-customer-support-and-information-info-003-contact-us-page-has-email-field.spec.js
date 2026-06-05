// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-003 Contact us page has email field', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO003ContactUsPageHasEmailField();
  });
});