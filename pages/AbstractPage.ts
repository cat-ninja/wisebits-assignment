import { type Page } from '@playwright/test';

export default class AbstractPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}
