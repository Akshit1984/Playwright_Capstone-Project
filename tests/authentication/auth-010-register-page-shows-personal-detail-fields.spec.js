// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-010 Register page shows personal detail fields', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH010RegisterPageShowsPersonalDetailFields();
  });
});