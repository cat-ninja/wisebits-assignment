import HomePage from '@pages/HomePage';
import { type Page } from '@playwright/test';

export default class Application {
    readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    private _homePage: HomePage;
    public get homePage(): HomePage {
        this._homePage ??= new HomePage(this.page);
        return this._homePage;
    }
}
