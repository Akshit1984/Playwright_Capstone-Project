// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-008 Conditions of use page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO008ConditionsOfUsePageOpens();
  });
});