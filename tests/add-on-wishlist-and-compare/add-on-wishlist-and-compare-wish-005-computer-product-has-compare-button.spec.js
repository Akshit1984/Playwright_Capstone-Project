// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-005 Computer product has compare button', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH005ComputerProductHasCompareButton();
  });
});