// @ts-check
import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async visit(route = '/') {
    await this.page.goto(route, { waitUntil: 'domcontentloaded' });
  }

  async navigate(route = '/') {
    await this.visit(route);
  }

  first(selector) {
    return this.page.locator(selector).first();
  }

  async hasTitle(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async hasUrl(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async hasHeading(expectedHeading) {
    await expect(this.first('h1')).toContainText(expectedHeading);
  }

  async pageTextIncludes(expectedText) {
    await expect(this.page.locator('body')).toContainText(expectedText);
  }

  async elementIsVisible(selector) {
    await expect(this.first(selector)).toBeVisible();
  }

  async elementIsEnabled(selector) {
    await expect(this.first(selector)).toBeEnabled();
  }

  async elementIsChecked(selector) {
    await expect(this.first(selector)).toBeChecked();
  }

  async elementHasValue(selector, expectedValue) {
    await expect(this.first(selector)).toHaveValue(expectedValue);
  }

  async elementTextIncludes(selector, expectedText) {
    await expect(this.first(selector)).toContainText(expectedText);
  }

  async hasAtLeast(selector, minimumCount) {
    await expect(async () => {
      expect(await this.page.locator(selector).count()).toBeGreaterThanOrEqual(minimumCount);
    }).toPass();
  }

  async verifyTitle(expectedTitle) {
    await this.hasTitle(expectedTitle);
  }

  async verifyUrl(expectedUrl) {
    await this.hasUrl(expectedUrl);
  }

  async verifyHeading(expectedHeading) {
    await this.hasHeading(expectedHeading);
  }

  async verifyBodyText(expectedText) {
    await this.pageTextIncludes(expectedText);
  }

  async verifyVisible(selector) {
    await this.elementIsVisible(selector);
  }

  async verifyEnabled(selector) {
    await this.elementIsEnabled(selector);
  }

  async verifyChecked(selector) {
    await this.elementIsChecked(selector);
  }

  async verifyValue(selector, expectedValue) {
    await this.elementHasValue(selector, expectedValue);
  }

  async verifyContainsText(selector, expectedText) {
    await this.elementTextIncludes(selector, expectedText);
  }

  async verifyCountAtLeast(selector, minimumCount) {
    await this.hasAtLeast(selector, minimumCount);
  }

  async checkPage({ route = '/', title, heading, text = [], visible = [], enabled = [], minimum = [] }) {
    await this.visit(route);

    if (title) {
      await this.hasTitle(title);
    }

    if (heading) {
      await this.hasHeading(heading);
    }

    for (const value of text) {
      await this.pageTextIncludes(value);
    }

    for (const selector of visible) {
      await this.elementIsVisible(selector);
    }

    for (const selector of enabled) {
      await this.elementIsEnabled(selector);
    }

    for (const [selector, count] of minimum) {
      await this.hasAtLeast(selector, count);
    }
  }
}
