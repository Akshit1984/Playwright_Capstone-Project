// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-003 Header wishlist link is visible', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH003HeaderWishlistLinkIsVisible();
  });
});