// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-007 Privacy notice page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO007PrivacyNoticePageOpens();
  });
});