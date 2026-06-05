// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-004 Login page supports returning customer section', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER004LoginPageSupportsReturningCustomerSection();
  });
});