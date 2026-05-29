// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-006 Apparel and shoes category shows products', async ({ productPage }) => {
    await productPage.verifyPROD006ApparelAndShoesCategoryShowsProducts();
  });
});