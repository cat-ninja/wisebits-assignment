import AbstractComponent from '@components/AbstractComponent';
import VideoList from '@components/VideoList';
import { type Locator } from '@playwright/test';

export default class VideoSection extends AbstractComponent {
    readonly heading: Locator;

    readonly videos: VideoList;

    constructor(wrap: Locator, name: string) {
        super(wrap);

        this.heading = this.wrap.locator('.title-row', {
            hasText: name
        });

        this.videos = new VideoList(this.heading.locator(':scope + .grid'));
    }
}
