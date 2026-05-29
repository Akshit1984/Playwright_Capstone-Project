// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-013 Email a friend form has message and send button', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH013EmailAFriendFormHasMessageAndSendButton();
  });
});