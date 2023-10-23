import HomePage from '@pages/HomePage';
import VideoPage from '@pages/VideoPage';
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

    private _videoPage: VideoPage;
    public get videoPage(): VideoPage {
        this._videoPage ??= new VideoPage(this.page);
        return this._videoPage;
    }
}
