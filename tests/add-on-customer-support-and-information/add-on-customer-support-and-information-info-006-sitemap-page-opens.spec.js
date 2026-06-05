// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Customer Support and Information coverage', () => {
  test('Add on - Customer Support and Information - INFO-006 Sitemap page opens', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO006SitemapPageOpens();
  });
});