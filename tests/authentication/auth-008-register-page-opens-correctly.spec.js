// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-008 Register page opens correctly', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH008RegisterPageOpensCorrectly();
  });
});