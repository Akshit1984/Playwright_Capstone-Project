// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-007 Digital downloads category opens', async ({ productPage }) => {
    await productPage.verifyPROD007DigitalDownloadsCategoryOpens();
  });
});