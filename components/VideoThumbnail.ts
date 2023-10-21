import AbstractComponent from '@components/AbstractComponent';
import { type Locator } from '@playwright/test';

export default class VideoThumbnail extends AbstractComponent {
    readonly wrap: Locator;

    readonly image: Locator;

    readonly buttons: Locator;

    readonly bage: Locator;

    readonly title: Locator;

    readonly studio: Locator;

    constructor(wrap: Locator) {
        super(wrap);

        this.wrap = wrap;

        this.image = wrap.getByRole('img');

        this.bage = wrap.locator('.thumb__video-badge');

        this.buttons = wrap.locator('.btn');

        this.title = wrap.locator('.thumb__title-video');

        this.studio = wrap.locator('.thumb__title-info__studio');
    }

    async open(): Promise<void> {
        await this.wrap.click();
    }
}
