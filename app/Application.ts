import { type Page } from '@playwright/test';

export default class Application {
    readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }
}
