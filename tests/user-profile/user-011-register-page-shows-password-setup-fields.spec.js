// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-011 Register page shows password setup fields', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER011RegisterPageShowsPasswordSetupFields();
  });
});