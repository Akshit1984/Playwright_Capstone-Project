// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-001 Wishlist page opens', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH001WishlistPageOpens();
  });
});