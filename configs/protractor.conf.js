require("dotenv").config();
const { CAPABILITIES } = require("./capabilities");
const { killChromedriver, killGeckoDriver } = require("../helpers/bash");

exports.config = {
  directConnect: true,
  capabilities: {
    ...CAPABILITIES[process.env.BROWSER ?? "CHROME"],
  },
  allScriptsTimeout: 360000,
  getPageTimeout: 60000,
  framework: "custom",
  SELENIUM_PROMISE_MANAGER: false,
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/**/*.feature"],
  cucumberOpts: {
    require: ["../steps/**/*.ts", "../support/**/*.ts"],
    format: [
      "json:../reports/cucumber_report.json",
      "@cucumber/pretty-formatter",
    ],
    tags: process.env.TAGS ?? "@login",
  },
  onPrepare: () => {
    require("ts-node").register({
      project: require("path").join(__dirname, "../tsconfig.json"),
    });
  },
  onCleanUp: () => {
    if (!process.env.BROWSER || process.env.BROWSER === "CHROME")
      killChromedriver();
    else killGeckoDriver();
  },
};
