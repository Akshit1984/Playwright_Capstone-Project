// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-014 Compare products footer link is available', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH014CompareProductsFooterLinkIsAvailable();
  });
});