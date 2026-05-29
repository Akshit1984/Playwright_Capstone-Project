// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-012 Email a friend form has friend email field', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH012EmailAFriendFormHasFriendEmailField();
  });
});