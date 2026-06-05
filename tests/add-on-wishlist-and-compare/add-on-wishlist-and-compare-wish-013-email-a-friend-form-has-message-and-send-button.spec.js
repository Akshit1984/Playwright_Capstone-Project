// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-013 Email a friend form has message and send button', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH013EmailAFriendFormHasMessageAndSendButton();
  });
});