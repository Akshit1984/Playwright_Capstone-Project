// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-005 Login page shows registration option for new customer', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH005LoginPageShowsRegistrationOptionForNewCustomer();
  });
});