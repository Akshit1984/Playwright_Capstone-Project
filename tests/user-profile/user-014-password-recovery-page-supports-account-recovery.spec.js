// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-014 Password recovery page supports account recovery', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER014PasswordRecoveryPageSupportsAccountRecovery();
  });
});