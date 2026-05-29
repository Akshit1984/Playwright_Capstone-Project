// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-008 Recently viewed products page opens', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH008RecentlyViewedProductsPageOpens();
  });
});