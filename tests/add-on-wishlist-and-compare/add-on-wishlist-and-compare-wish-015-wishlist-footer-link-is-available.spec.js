// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-015 Wishlist footer link is available', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH015WishlistFooterLinkIsAvailable();
  });
});