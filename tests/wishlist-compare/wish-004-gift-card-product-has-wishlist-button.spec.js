// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-004 Gift card product has wishlist button', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH004GiftCardProductHasWishlistButton();
  });
});