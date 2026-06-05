// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Product and search coverage', () => {
  test('PROD-015 Search page returns computer products', async ({ productPage }) => {
    await productPage.verifyPROD015SearchPageReturnsComputerProducts();
  });
});