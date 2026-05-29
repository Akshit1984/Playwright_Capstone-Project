// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-013 Protected account page redirects guest user to login', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH013ProtectedAccountPageRedirectsGuestUserToLogin();
  });
});