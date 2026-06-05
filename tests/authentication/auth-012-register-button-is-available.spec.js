// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-012 Register button is available', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH012RegisterButtonIsAvailable();
  });
});