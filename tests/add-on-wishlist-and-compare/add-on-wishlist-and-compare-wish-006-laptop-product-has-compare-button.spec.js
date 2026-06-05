// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-006 Laptop product has compare button', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH006LaptopProductHasCompareButton();
  });
});