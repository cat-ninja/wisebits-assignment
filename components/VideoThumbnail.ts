import AbstractComponent from '@components/AbstractComponent';

export default class VideoThumbnail extends AbstractComponent {
    readonly image = this.wrap.getByRole('img');

    readonly bage = this.wrap.locator('.thumb__video-badge');

    readonly buttons = this.wrap.locator('.btn');

    readonly title = this.wrap.locator('.thumb__title-video');

    readonly studio = this.wrap.locator('.thumb__title-info__studio');

    async open(): Promise<void> {
        await this.wrap.click();
    }
}
