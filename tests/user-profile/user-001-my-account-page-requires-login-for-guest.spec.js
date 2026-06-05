// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-001 My account page requires login for guest', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER001MyAccountPageRequiresLoginForGuest();
  });
});