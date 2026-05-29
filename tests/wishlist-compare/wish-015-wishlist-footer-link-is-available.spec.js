// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-015 Wishlist footer link is available', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH015WishlistFooterLinkIsAvailable();
  });
});