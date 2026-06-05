// @ts-check
import { defineConfig, devices } from '@playwright/test';

const useAllure = process.env.ALLURE === 'true';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 6 : 6,
  timeout: 45000,
  expect: {
    timeout: 10000,
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ...(useAllure ? [['allure-playwright', { resultsDir: 'allure-results' }]] : []),
  ],
  use: {
    baseURL: 'https://demowebshop.tricentis.com',
    actionTimeout: 10000,
    navigationTimeout: 30000,
    screenshot: 'only-on-failure',
    trace: 'off',
    video: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
