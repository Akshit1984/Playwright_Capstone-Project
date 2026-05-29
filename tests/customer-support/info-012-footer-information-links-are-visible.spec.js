// @ts-check
import { test } from '../../fixtures/baseFixture.js';

test.describe('Customer support coverage', () => {
  test('INFO-012 Footer information links are visible', async ({ customerSupportPage }) => {
    await customerSupportPage.verifyINFO012FooterInformationLinksAreVisible();
  });
});