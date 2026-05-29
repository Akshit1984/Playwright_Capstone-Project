// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-006 Password recovery page opens correctly', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH006PasswordRecoveryPageOpensCorrectly();
  });
});