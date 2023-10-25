import AbstractComponent from '@components/AbstractComponent';

export default class VideoPlayer extends AbstractComponent {
    readonly video = this.wrap
        .locator('[data-el="VideoPurchaseSimple"]')
        .locator('video');

    readonly purchaseMenu = this.wrap.locator('.video-purchase__menu');

    readonly volumeToggle = this.wrap.locator('.video-purchase__volume-toggle');

    async isCurrentlyPlaying(): Promise<boolean> {
        const isPlaying = await this.video.evaluate(
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            (v) => !v.paused && v.currentTime > 0
        );
        return isPlaying;
    }

    async getCurrentFrame(): Promise<Buffer> {
        return await this.video.screenshot();
    }
}
