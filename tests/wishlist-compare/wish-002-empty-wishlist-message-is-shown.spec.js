// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-002 Empty wishlist message is shown', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH002EmptyWishlistMessageIsShown();
  });
});