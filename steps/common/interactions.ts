import { When } from "@cucumber/cucumber";
import { LoginPage } from "../../page-objects/loginPage";
import { browser } from "protractor";

const loginPage = new LoginPage();

When("I open {word} page", async function (page: string) {
  await browser.waitForAngularEnabled(false);
  await loginPage.open();
});
