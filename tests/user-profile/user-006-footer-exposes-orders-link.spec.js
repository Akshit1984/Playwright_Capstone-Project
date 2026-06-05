// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('User profile coverage', () => {
  test('USER-006 Footer exposes orders link', async ({ userProfilePage }) => {
    await userProfilePage.verifyUSER006FooterExposesOrdersLink();
  });
});