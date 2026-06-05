// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-011 Blog page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO011BlogPageOpens();
  });
});