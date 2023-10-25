import VideoPlayer from '@components/VideoPlayer';
import AbstractPage from '@pages/AbstractPage';

export default class VideoPage extends AbstractPage {
    readonly player: VideoPlayer = new VideoPlayer(this.page.locator('.video'));
}
