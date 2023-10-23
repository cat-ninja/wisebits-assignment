import AbstractComponent from '@components/AbstractComponent';
import VideoThumbnail from '@components/VideoThumbnail';
import { expect, type Locator } from '@playwright/test';

export default class VideoList extends AbstractComponent {
    readonly wrap: Locator;

    private readonly items: Locator;

    constructor(wrap: Locator) {
        super(wrap);

        this.wrap = wrap;

        this.items = this.wrap.locator('[data-el-video]');
    }

    private async waitForVideos(): Promise<number> {
        let count = 0;
        await expect
            .poll(async () => {
                count = await this.items.count();
                return count;
            })
            .toBeGreaterThanOrEqual(1);
        return count;
    }

    async getVideos(): Promise<VideoThumbnail[]> {
        await this.waitForVideos();
        return Array.from(
            { length: await this.items.count() },
            (_, i) => new VideoThumbnail(this.items.nth(i))
        );
    }

    async getRandomVideo(): Promise<VideoThumbnail> {
        const videos = await this.getVideos();
        return videos[Math.floor(Math.random() * videos.length)];
    }

    getVideoMatching(title: string): VideoThumbnail {
        return new VideoThumbnail(this.items.filter({ hasText: title }));
    }
}
