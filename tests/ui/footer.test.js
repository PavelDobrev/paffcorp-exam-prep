const { test, expect } = require('@playwright/test');

test('Check footer', async ({ page }) => {
    await page.goto('https://paffcorp.onrender.com');  
    const footer = await page.$('header');
    const text = await footer.textContent();
    expect(text).toContain('Home | View Games | Add Game | About');
  });
  