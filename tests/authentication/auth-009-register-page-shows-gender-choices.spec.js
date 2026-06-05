// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-009 Register page shows gender choices', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH009RegisterPageShowsGenderChoices();
  });
});