// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-011 Shopping cart shows shipping step', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR011ShoppingCartShowsShippingStep();
  });
});