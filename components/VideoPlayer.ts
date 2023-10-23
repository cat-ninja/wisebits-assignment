import AbstractComponent from '@components/AbstractComponent';
import { type Locator } from '@playwright/test';

export default class VideoPlayer extends AbstractComponent {
    readonly wrap: Locator;

    readonly video: Locator;

    readonly purchaseMenu: Locator;

    readonly volumeToggle: Locator;

    constructor(wrap: Locator) {
        super(wrap);

        this.wrap = wrap;

        this.purchaseMenu = this.wrap.locator('.video-purchase__menu');

        this.video = this.wrap
            .locator('[data-el="VideoPurchaseSimple"]')
            .locator('video');

        this.volumeToggle = this.wrap.locator('.video-purchase__volume-toggle');
    }

    async isCurrentlyPlaying(): Promise<boolean> {
        const isPlaying = await this.video.evaluate(
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            (v) => !v.paused && v.currentTime > 0
        );
        return isPlaying;
    }
}
