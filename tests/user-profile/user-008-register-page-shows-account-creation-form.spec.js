// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-008 Register page shows account creation form', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER008RegisterPageShowsAccountCreationForm();
  });
});