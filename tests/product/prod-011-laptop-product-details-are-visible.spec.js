// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-011 Laptop product details are visible', async ({ productPage }) => {
    await productPage.verifyPROD011LaptopProductDetailsAreVisible();
  });
});