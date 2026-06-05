// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-004 Login page shows remember me and forgot password options', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH004LoginPageShowsRememberMeAndForgotPasswordOptions();
  });
});