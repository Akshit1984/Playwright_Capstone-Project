// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-005 Footer exposes my account link', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER005FooterExposesMyAccountLink();
  });
});