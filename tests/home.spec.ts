import { test, expect } from '@playwright/test';

test.describe('ClimatePulse MVP Homepage', () => {
    test('has title and renders core sections', async ({ page }) => {
        await page.goto('/');

        // Check title (assuming default Vite title or updated one)
        await expect(page).toHaveTitle(/ClimatePulse/i);

        // Act 1: The Human Story (Hero)
        await expect(page.getByRole('heading', { name: /When the flood came/i })).toBeVisible();
        await expect(page.getByText(/ASEAN Pilot Launching Q3 2026/i)).toBeVisible();

        // Act 2: The Blindspot (Problem Section)
        await page.evaluate(() => window.scrollTo(0, 1000));
        await expect(page.getByRole('heading', { name: /The Last-Mile Climate Blindspot/i })).toBeVisible();
        await expect(page.getByText(/Regional disaster preparedness score/i)).toBeVisible();

        // Act 3: The Proof (Prototype Section)
        await page.evaluate(() => window.scrollTo(0, 2000));
        await expect(page.getByRole('heading', { name: /Try the prototype/i })).toBeVisible();
        // The phone mockup should be visible
        await expect(page.getByText(/12 neighbors reported today/i)).toBeVisible();

        // Act 4: The Data (Credibility Section)
        await page.evaluate(() => window.scrollTo(0, 3000));
        await expect(page.getByRole('heading', { name: /Why current approaches fall short/i })).toBeVisible();
        await expect(page.getByText(/Community trust factor/i)).toBeVisible();

        // Act 5: The Ask (Waitlist Section)
        await page.evaluate(() => window.scrollTo(0, 4000));
        await expect(page.getByRole('heading', { name: /Be the first ground-truth reporter/i })).toBeVisible();

        // Test opening the survey modal (assuming the form button triggers it since embed isn't real yet)
        await page.getByRole('button', { name: /Join Waitlist/i }).click();
        await expect(page.getByRole('heading', { name: /Thank you for joining/i })).toBeVisible();
        await page.getByRole('button', { name: /Close/i }).click();

        // Act 6: The Team (Volunteer Section)
        await page.evaluate(() => window.scrollTo(0, 5000));
        await expect(page.getByRole('heading', { name: /Built by volunteers/i })).toBeVisible();
    });
});

test.describe('ClimatePulse Impact Page', () => {
    test('renders impact page theory of change', async ({ page }) => {
        await page.goto('/impact');

        await expect(page.getByRole('heading', { name: /The case for closing the last-mile climate gap/i })).toBeVisible();
        await expect(page.getByRole('heading', { name: /Theory of Change/i })).toBeVisible();
    });
});
