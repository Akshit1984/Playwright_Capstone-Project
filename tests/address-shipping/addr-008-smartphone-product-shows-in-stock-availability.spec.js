// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-008 Smartphone product shows in stock availability', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR008SmartphoneProductShowsInStockAvailability();
  });
});