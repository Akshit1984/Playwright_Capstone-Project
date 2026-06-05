// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-001 Login page opens with correct title and heading', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH001LoginPageOpensWithCorrectTitleAndHeading();
  });
});