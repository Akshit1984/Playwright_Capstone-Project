// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Add on - Wishlist and Compare coverage', () => {
  test('Add on - Wishlist and Compare - WISH-009 New products page opens', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH009NewProductsPageOpens();
  });
});