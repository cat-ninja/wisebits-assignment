/* eslint-disable @typescript-eslint/no-non-null-assertion */
interface Config {
    url: string;
}

/**
 * Retrieves the configuration object from the environment variables.
 * @returns {Config} The configuration object with the URL property.
 */
export const getConfig = (): Config => {
    return {
        url: process.env.URL!
    };
};
