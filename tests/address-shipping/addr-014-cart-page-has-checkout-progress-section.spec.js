// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-014 Cart page has checkout progress section', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR014CartPageHasCheckoutProgressSection();
  });
});