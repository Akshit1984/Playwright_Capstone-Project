// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-005 Computer product has compare button', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH005ComputerProductHasCompareButton();
  });
});