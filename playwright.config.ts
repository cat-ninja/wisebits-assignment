/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { getConfig } from '@config';
import { calculateFutureDate } from '@helpers/time';
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import fs from 'fs';
import os from 'os';

dotenv.config();

const missingEnvironmentVariables = Object.keys(
    dotenv.parse(fs.readFileSync('.env.example'))
).filter((exampleKey) => !process.env[exampleKey]);

if (missingEnvironmentVariables.length > 0) {
    throw new Error(`${missingEnvironmentVariables.join(', ')} not configured`);
}

const { url: baseURL } = getConfig();

const projects = [
    {
        name: 'chrome',
        use: {
            ...devices['Desktop Chrome'],
            launchOptions: {
                // Use Chrome due to the missing h264 video codecs in Chromium.
                channel: 'chrome'
            }
        }
    },
    {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] }
    }
];

// Video codecs for webkit are bundled into the MacOS so the playback might be broken on other platforms.
if (os.platform() === 'darwin') {
    projects.push({
        name: 'webkit',
        use: { ...devices['Desktop Safari'] }
    });
}

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['dot'], ['html', { open: 'never' }]],
    use: {
        baseURL,
        trace: 'retain-on-failure',
        actionTimeout: 5000,
        storageState: {
            cookies: [
                {
                    name: 'isVisitorAgreementAccepted',
                    value: '1',
                    domain: baseURL.split('//')[1],
                    path: '/',
                    expires: calculateFutureDate(1),
                    httpOnly: false,
                    secure: false,
                    sameSite: 'Lax'
                }
            ],
            origins: []
        }
    },
    projects
});
