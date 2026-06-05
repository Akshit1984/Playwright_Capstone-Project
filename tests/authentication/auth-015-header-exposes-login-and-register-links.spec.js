// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Authentication coverage', () => {
  test('AUTH-015 Header exposes login and register links', async ({ authenticationPage }) => {
    await authenticationPage.verifyAUTH015HeaderExposesLoginAndRegisterLinks();
  });
});