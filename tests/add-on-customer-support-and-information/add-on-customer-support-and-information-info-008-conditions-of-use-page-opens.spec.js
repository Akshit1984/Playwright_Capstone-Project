// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-008 Conditions of use page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO008ConditionsOfUsePageOpens();
  });
});