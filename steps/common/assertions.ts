import { Then } from "@cucumber/cucumber";
import { getPage } from "../../page-objects/pageProvider";
import { browser } from "protractor";
import { expect } from "chai";

Then("I am on {word} page", async function (pageName) {
  const page = await getPage(pageName);
  const url = await browser.getCurrentUrl();
  await expect(url).to.be.equal(page.url);
});
