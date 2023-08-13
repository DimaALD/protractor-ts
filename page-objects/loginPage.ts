import { BasePage } from "./basePage";
import { by, element } from "protractor";
import {
  waitForElementAndClick,
  waitForElementAndType,
} from "../helpers/element/actions";

export class LoginPage extends BasePage {
  constructor() {
    super("https://www.saucedemo.com/");
  }

  public username = element(by.css("[data-test=username]"));
  public password = element(by.css("[data-test=password]"));
  public loginBtn = element(by.css("[data-test=login-button]"));

  public async fillLoginForm(username: string, password: string) {
    await waitForElementAndType(this.username, username);
    await waitForElementAndType(this.password, password);
    await waitForElementAndClick(this.loginBtn);
  }
}
