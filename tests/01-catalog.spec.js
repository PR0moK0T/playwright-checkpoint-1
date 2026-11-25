import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Задание 1', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await expect(page.getByText('Apple', { exact: true })).toBeVisible();

  await model.search('Red Lipstick');

  await expect(page.getByText('Red Lipstick', { exact: true })).toBeVisible();
  await expect(page.getByText('Apple', { exact: true })).toHaveCount(0);
  // END
});

test('Задание 2', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await expect(page.getByText('Apple', { exact: true})).toBeVisible

  await model.selectBrand('Essence');

  await expect(page.getByRole('checkbox', { name: 'Essence', exact: true })).toBeChecked();
  await expect(page.getByText('Essence Mascara Lash Princess', { exact: true })).toBeVisible();
  await expect(page.getByText('Apple', { exact: true })).toHaveCount(0);
  // END
});

test('Задание 3', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.openProduct('Red Lipstick');
  // END
});

test('Задание 4', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await expect(page.getByText('Essence Mascara Lash Princess', { exact: true})).toBeVisible

  await model.nextPage();

  await expect(page.getByText('Essence Mascara Lash Princess', { exact: true })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /view|details|open/i }).or(page.locator('article, [data-testid*="product"], .card')).first()).toBeVisible();
  // END
});

