// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-001 Home page shows welcome content and featured products', async ({ productPage }) => {
    await productPage.verifyPROD001HomePageShowsWelcomeContentAndFeaturedProducts();
  });
});