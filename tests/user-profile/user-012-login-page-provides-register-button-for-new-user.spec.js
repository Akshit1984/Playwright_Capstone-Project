// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-012 Login page provides register button for new user', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER012LoginPageProvidesRegisterButtonForNewUser();
  });
});