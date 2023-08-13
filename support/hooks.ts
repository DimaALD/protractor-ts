import { After, Before } from "@cucumber/cucumber";
import { browser } from "protractor";

Before(async () => {
  await browser.manage().window().maximize();
});

After(async () => {
  await browser.close();
});
