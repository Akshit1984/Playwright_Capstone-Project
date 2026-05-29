// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-015 Sitemap includes account links', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER015SitemapIncludesAccountLinks();
  });
});