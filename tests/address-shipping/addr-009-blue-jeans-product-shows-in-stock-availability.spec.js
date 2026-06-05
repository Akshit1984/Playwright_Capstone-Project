// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-009 Blue jeans product shows in stock availability', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR009BlueJeansProductShowsInStockAvailability();
  });
});