import { browser, element, ElementFinder, ExpectedConditions as EC } from "protractor";

export async function waitForElementToBeVisible(
  element: ElementFinder,
  timeout = 5000
) {
  await browser.wait(EC.visibilityOf(element), timeout);
}

export async function waitForElementToBeClickable(
  element: ElementFinder,
  timeout = 5000
) {
  await browser.wait(EC.elementToBeClickable(element), timeout);
}

export async function waitForElementToBeInDOM(
  element: ElementFinder,
  timeout = 5000
) {
  await browser.wait(EC.presenceOf(element), timeout);
}

export async function waitForElementToBeInvisible(element: ElementFinder, timeout = 5000) {
  await browser.wait(EC.invisibilityOf(element), timeout);
}
