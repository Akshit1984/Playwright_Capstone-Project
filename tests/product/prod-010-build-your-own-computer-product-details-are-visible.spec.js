// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-010 Build your own computer product details are visible', async ({ productPage }) => {
    await productPage.verifyPROD010BuildYourOwnComputerProductDetailsAreVisible();
  });
});