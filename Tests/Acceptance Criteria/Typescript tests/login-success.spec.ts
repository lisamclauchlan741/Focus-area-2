import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/LoginPage';

test('login with valid credentials redirects to the inventory page and shows products', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.waitForInventoryPage();

  await expect(page.locator('.inventory_list')).toBeVisible();
});
