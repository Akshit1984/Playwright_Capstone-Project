// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Address and shipping coverage', () => {
  test('ADDR-005 Science product displays free shipping', async ({ addressShippingPage }) => {
    await addressShippingPage.verifyADDR005ScienceProductDisplaysFreeShipping();
  });
});