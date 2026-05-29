// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-009 Gift cards category opens with products', async ({ productPage }) => {
    await productPage.verifyPROD009GiftCardsCategoryOpensWithProducts();
  });
});