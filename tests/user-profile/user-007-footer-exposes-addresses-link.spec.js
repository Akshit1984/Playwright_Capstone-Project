// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-007 Footer exposes addresses link', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER007FooterExposesAddressesLink();
  });
});