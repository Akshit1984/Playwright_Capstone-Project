// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-007 Compare products page opens', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH007CompareProductsPageOpens();
  });
});