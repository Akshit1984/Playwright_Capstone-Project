// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-014 Category page has sort and page size controls', async ({ productPage }) => {
    await productPage.verifyPROD014CategoryPageHasSortAndPageSizeControls();
  });
});