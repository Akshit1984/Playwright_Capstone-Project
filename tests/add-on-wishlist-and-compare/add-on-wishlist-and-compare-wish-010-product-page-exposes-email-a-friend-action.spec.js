// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-010 Product page exposes email a friend action', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH010ProductPageExposesEmailAFriendAction();
  });
});