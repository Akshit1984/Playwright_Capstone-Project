// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-011 Email a friend page opens', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH011EmailAFriendPageOpens();
  });
});