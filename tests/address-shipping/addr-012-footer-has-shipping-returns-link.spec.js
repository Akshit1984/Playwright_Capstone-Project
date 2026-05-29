// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-012 Footer has shipping returns link', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR012FooterHasShippingReturnsLink();
  });
});