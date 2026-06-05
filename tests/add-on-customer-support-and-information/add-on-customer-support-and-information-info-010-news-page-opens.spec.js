// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-010 News page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO010NewsPageOpens();
  });
});