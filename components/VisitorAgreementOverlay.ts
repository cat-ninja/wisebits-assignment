import AbstractComponent from '@components/AbstractComponent';

export default class VisitorAgreementOverlay extends AbstractComponent {
    readonly confirmButton = this.wrap.locator('#yes-im-over-18');

    async confirmAge(): Promise<void> {
        await this.confirmButton.click();
    }
}
