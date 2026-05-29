// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-011 Register page shows password fields', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH011RegisterPageShowsPasswordFields();
  });
});