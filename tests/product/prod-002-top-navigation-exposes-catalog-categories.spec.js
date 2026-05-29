// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-002 Top navigation exposes catalog categories', async ({ productPage }) => {
    await productPage.verifyPROD002TopNavigationExposesCatalogCategories();
  });
});