// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-004 Gift card product has wishlist button', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH004GiftCardProductHasWishlistButton();
  });
});