// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-013 Login page provides forgot password link', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER013LoginPageProvidesForgotPasswordLink();
  });
});