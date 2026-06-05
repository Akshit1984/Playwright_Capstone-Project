// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-006 Health book product displays delivery date', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR006HealthBookProductDisplaysDeliveryDate();
  });
});