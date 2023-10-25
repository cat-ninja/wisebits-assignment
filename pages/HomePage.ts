import VideoSection from '@components/VideoSection';
import VisitorAgreementOverlay from '@components/VisitorAgreementOverlay';
import AbstractPage from '@pages/AbstractPage';

export default class HomePage extends AbstractPage {
    private readonly body = this.page.locator('body');

    readonly sections = {
        popular: new VideoSection(this.body, 'Popular Faphouse videos'),
        popularCategories: new VideoSection(this.body, 'Popular categories')
    };

    readonly visitorAgreement = new VisitorAgreementOverlay(
        this.page.locator('[data-el="VisitorAgreement"]')
    );

    async open(): Promise<void> {
        await this.page.goto('');
    }
}
