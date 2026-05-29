// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-013 Book product page shows price and shipping text', async ({ productPage }) => {
    await productPage.verifyPROD013BookProductPageShowsPriceAndShippingText();
  });
});