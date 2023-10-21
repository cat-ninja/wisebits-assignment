import VideoSection from '@components/VideoSection';
import AbstractPage from '@pages/AbstractPage';
import { type Locator, type Page } from '@playwright/test';

export default class HomePage extends AbstractPage {
    readonly page: Page;

    private readonly body: Locator;

    readonly sections: {
        popular: VideoSection;
        popularCategories: VideoSection;
    };

    constructor(page: Page) {
        super(page);

        this.page = page;

        this.body = this.page.locator('body');

        this.sections = {
            popular: new VideoSection(this.body, 'Popular Faphouse videos'),
            popularCategories: new VideoSection(this.body, 'Popular categories')
        };
    }

    async open(): Promise<void> {
        await this.page.goto('');
    }
}
