// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-004 Book product displays free shipping', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR004BookProductDisplaysFreeShipping();
  });
});