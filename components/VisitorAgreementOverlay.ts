import AbstractComponent from '@components/AbstractComponent';
import type { Locator } from '@playwright/test';

export default class VisitorAgreementOverlay extends AbstractComponent {
    readonly wrap: Locator;

    readonly confirmButton: Locator;

    constructor(wrap: Locator) {
        super(wrap);

        this.wrap = wrap;

        this.confirmButton = this.wrap.locator('#yes-im-over-18');
    }

    async confirmAge(): Promise<void> {
        await this.confirmButton.click();
    }
}
