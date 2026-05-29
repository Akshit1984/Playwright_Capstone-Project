// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Cart coverage', () => {
  test('CART-014 Cart page keeps footer follow links available', async ({ cartPage }) => {
    await cartPage.verifyCART014CartPageKeepsFooterFollowLinksAvailable();
  });
});