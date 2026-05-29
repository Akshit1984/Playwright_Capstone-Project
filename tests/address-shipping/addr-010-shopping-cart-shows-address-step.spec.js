// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-010 Shopping cart shows address step', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR010ShoppingCartShowsAddressStep();
  });
});