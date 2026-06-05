// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-001 Wishlist page opens', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH001WishlistPageOpens();
  });
});