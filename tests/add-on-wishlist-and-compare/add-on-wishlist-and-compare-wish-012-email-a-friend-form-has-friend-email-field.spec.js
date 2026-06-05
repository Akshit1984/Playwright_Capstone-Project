// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-012 Email a friend form has friend email field', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH012EmailAFriendFormHasFriendEmailField();
  });
});