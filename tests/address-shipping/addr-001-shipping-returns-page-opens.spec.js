// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-001 Shipping returns page opens', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR001ShippingReturnsPageOpens();
  });
});