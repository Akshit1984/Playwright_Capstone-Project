// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-004 Computers category shows subcategories', async ({ productPage }) => {
    await productPage.verifyPROD004ComputersCategoryShowsSubcategories();
  });
});