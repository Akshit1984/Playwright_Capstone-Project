// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-012 Smartphone product details are visible', async ({ productPage }) => {
    await productPage.verifyPROD012SmartphoneProductDetailsAreVisible();
  });
});