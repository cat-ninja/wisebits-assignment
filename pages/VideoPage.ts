import VideoPlayer from '@components/VideoPlayer';
import AbstractPage from '@pages/AbstractPage';
import { type Page } from '@playwright/test';

export default class VideoPage extends AbstractPage {
    readonly page: Page;

    readonly player: VideoPlayer;

    constructor(page: Page) {
        super(page);

        this.page = page;

        this.player = new VideoPlayer(this.page.locator('.video'));
    }
}
