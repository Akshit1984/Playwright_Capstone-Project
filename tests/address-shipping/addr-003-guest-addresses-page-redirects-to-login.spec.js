// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-003 Guest addresses page redirects to login', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR003GuestAddressesPageRedirectsToLogin();
  });
});