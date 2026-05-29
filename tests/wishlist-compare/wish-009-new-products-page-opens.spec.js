// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Wishlist and compare coverage', () => {
  test('WISH-009 New products page opens', async ({ wishlistComparePage }) => {
    await wishlistComparePage.verifyWISH009NewProductsPageOpens();
  });
});