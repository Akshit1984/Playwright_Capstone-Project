// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-002 Login page shows email and password fields', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH002LoginPageShowsEmailAndPasswordFields();
  });
});