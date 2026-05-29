// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-009 Register page shows personal details fields', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER009RegisterPageShowsPersonalDetailsFields();
  });
});