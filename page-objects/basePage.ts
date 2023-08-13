import { browser, ElementArrayFinder, ElementFinder } from "protractor";

export class BasePage {
  constructor(public url: string) {}

  public async open() {
    await browser.get(this.url);
  }

  public getElement(name: string): ElementFinder | ElementArrayFinder {
    return this[name];
  }
}
