// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-002 Empty wishlist message is shown', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH002EmptyWishlistMessageIsShown();
  });
});