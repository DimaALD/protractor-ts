import { BasePage } from "./basePage";
import { Header } from "./components/header";

export class HomePage extends BasePage {
  public header: Header;

  constructor() {
    super("https://www.saucedemo.com/inventory.html");
    this.header = new Header();
  }

  public async clickElement(elementName: string) {
    const elements = new Map([
      ["Cart", this.header.cartIconLink],
      ["Burger", this.header.burgerBtn],
    ]);
  }

  public getPageTitleText() {
    return this.header.logo.getText()
  }
}
