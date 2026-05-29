// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-007 Password recovery page has email field and recover button', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH007PasswordRecoveryPageHasEmailFieldAndRecoverButton();
  });
});