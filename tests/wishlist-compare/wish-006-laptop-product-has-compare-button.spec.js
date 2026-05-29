// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-006 Laptop product has compare button', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH006LaptopProductHasCompareButton();
  });
});