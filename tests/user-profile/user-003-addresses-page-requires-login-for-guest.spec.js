// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-003 Addresses page requires login for guest', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER003AddressesPageRequiresLoginForGuest();
  });
});