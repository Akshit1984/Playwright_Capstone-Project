// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-003 Header wishlist link is visible', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH003HeaderWishlistLinkIsVisible();
  });
});