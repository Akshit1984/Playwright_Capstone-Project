// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-008 Jewelry category opens with product cards', async ({ productPage }) => {
    await productPage.verifyPROD008JewelryCategoryOpensWithProductCards();
  });
});