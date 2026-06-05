// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-003 Login page shows login button', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH003LoginPageShowsLoginButton();
  });
});