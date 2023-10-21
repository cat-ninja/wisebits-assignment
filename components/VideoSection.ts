import AbstractComponent from '@components/AbstractComponent';
import VideoList from '@components/VideosList';
import { type Locator } from '@playwright/test';

export default class VideoSection extends AbstractComponent {
    readonly wrap: Locator;

    readonly heading: Locator;

    readonly videos: VideoList;

    constructor(wrap: Locator, name: string) {
        super(wrap);

        this.wrap = wrap;

        this.heading = this.wrap.locator('.title-row', {
            hasText: name
        });

        this.videos = new VideoList(this.heading.locator(':scope + .grid'));
    }
}
