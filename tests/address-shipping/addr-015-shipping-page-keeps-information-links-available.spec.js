// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-015 Shipping page keeps information links available', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR015ShippingPageKeepsInformationLinksAvailable();
  });
});