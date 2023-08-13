import { ElementFinder } from "protractor";
import { waitForElementToBeClickable, waitForElementToBeInDOM, waitForElementToBeVisible } from "./wait";

export async function waitForElementAndClick(element: ElementFinder, timeout?: number) {
  await waitForElementToBeClickable(element, timeout);
  await element.click();
}

export async function waitForElementAndType(element: ElementFinder, value: string, timeout?: number) {
  await waitForElementToBeInDOM(element, timeout);
  await waitForElementToBeVisible(element, timeout);
  await element.sendKeys(value);
}
