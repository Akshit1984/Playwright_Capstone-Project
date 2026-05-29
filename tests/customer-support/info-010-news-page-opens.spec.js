// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-010 News page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO010NewsPageOpens();
  });
});