import { test } from '@fixtures/test';
import { expect } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test('User is asked to confirm their age', async ({ app }) => {
    const { homePage } = app;
    const { visitorAgreement } = homePage;

    await test.step('Open the homepage', async () => {
        await homePage.open();
    });

    await test.step('Make sure overlay is hidden on confirmation', async () => {
        await visitorAgreement.confirmAge();
        await expect(visitorAgreement.wrap).toBeHidden();
    });
});
