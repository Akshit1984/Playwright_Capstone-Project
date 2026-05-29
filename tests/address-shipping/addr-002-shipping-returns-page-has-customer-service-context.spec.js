// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-002 Shipping returns page has customer service context', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR002ShippingReturnsPageHasCustomerServiceContext();
  });
});