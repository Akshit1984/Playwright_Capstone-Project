// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-008 Recently viewed products page opens', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH008RecentlyViewedProductsPageOpens();
  });
});