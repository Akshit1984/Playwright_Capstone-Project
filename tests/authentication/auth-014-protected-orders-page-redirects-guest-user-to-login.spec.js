// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-014 Protected orders page redirects guest user to login', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH014ProtectedOrdersPageRedirectsGuestUserToLogin();
  });
});