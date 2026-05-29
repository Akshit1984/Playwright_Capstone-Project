// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-011 Blog page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO011BlogPageOpens();
  });
});