require("dotenv").config();

exports.CAPABILITIES = {
  CHROME: {
    browserName: "chrome",
    maxInstances: process.env.INSTANCES ?? 1,
    shardTestFiles: !!process.env.INSTANCES,
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=1920,1080" ]
    }
  },
  FIREFOX: {
    browserName: "firefox",
    acceptInsecureCerts: true,
    maxInstances: process.env.INSTANCES ?? 1,
    shardTestFiles: !!process.env.INSTANCES,
    'moz:firefoxOptions': {
      args: [ "--headless" ]
    }
  }
};
