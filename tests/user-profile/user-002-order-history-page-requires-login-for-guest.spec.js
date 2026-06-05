// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-002 Order history page requires login for guest', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER002OrderHistoryPageRequiresLoginForGuest();
  });
});