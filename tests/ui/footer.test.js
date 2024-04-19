const { test, expect } = require('@playwright/test');

test('Check footer', async ({ page }) => {
    await page.goto('http://localhost:8080');  
    const footer = await page.$('header');
    const text = await footer.textContent();
    expect(text).toContain('Home | View Games | Add Game | About');
  });
  