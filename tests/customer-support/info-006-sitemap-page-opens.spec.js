// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-006 Sitemap page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO006SitemapPageOpens();
  });
});