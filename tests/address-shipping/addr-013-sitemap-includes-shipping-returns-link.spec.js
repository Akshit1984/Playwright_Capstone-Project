// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-013 Sitemap includes shipping returns link', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR013SitemapIncludesShippingReturnsLink();
  });
});