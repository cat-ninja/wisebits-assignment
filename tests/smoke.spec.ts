import { test } from '@fixtures/test';
import { expect } from '@playwright/test';

test('Simple smoke test', async ({ app }) => {
    const { homePage, videoPage } = app;
    const { popular: popularSection } = homePage.sections;
    const { player } = videoPage;

    await test.step('Open the home page', async () => {
        await homePage.open();
    });

    await test.step('Open a random video inside of the Populars section', async () => {
        const video = await popularSection.videos.getRandomVideo();
        await video.open();
    });

    await test.step('Make sure the user is asked to get a full video', async () => {
        await expect(player.purchaseMenu).toBeVisible();
    });

    await test.step('Check the purchase menu hides automatically', async () => {
        await expect(player.purchaseMenu).not.toBeInViewport({
            timeout: 10_000,
            ratio: 0.01
        });
    });

    await test.step('Make sure the video is playing', async () => {
        const frame = await player.getCurrentFrame();

        await expect
            .poll(async () => await player.isCurrentlyPlaying())
            .toBeTruthy();

        expect(await player.getCurrentFrame()).not.toEqual(frame);
    });

    await test.step('Check the video is muted by default', async () => {
        await expect(player.volumeToggle).not.toHaveClass(/unmuted/);
        await player.volumeToggle.click();
        await expect(player.volumeToggle).toHaveClass(/unmuted/);
    });
});
