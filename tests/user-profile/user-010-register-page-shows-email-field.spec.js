// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-010 Register page shows email field', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER010RegisterPageShowsEmailField();
  });
});