
# Pre-requisites

* NodeJS v18.6.0 or higher

## Installing dependencies & default browsers

Before running the tests, execute

```sh
npm install && npx playwright install
```

to download required dependencies & browsers binaries.

## Installing Chrome

Default Chromium browser does not have h264 video codecs required to play the videos.
If you don't have Chrome browser installed on your OS run:

```sh
npx playwright install chrome
```

Note: The aforementioned command will first attempt to uninstall Chrome. This might cause some settings to be reset or deleted. It's not recommended to run it if you already have Chrome installed on your OS.

## Creating a .env file

Copy the .env.example and provide values for the environment variables.

```sh
cp .env.example .env && echo URL=https://faphouse.com > .env
```

## Running the tests

To run all tests, execute

```sh
npm test
```
