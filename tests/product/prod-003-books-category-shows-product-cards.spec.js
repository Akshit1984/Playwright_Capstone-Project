// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-003 Books category shows product cards', async ({ productPage }) => {
    await productPage.verifyPROD003BooksCategoryShowsProductCards();
  });
});