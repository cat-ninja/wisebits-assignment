import Application from '@app';
import { test as base } from '@playwright/test';

interface ApplicationFixtures {
    app: Application;
}

export const test = base.extend<ApplicationFixtures>({
    app: async ({ page }, use) => {
        await use(new Application(page));
    }
});
