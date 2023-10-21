import { type Locator } from '@playwright/test';

export default class AbstractComponent {
    readonly wrap: Locator;

    constructor(wrap: Locator) {
        this.wrap = wrap;
    }
}
