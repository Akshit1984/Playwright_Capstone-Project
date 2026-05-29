// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-010 Product page exposes email a friend action', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH010ProductPageExposesEmailAFriendAction();
  });
});