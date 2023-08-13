import { When } from "@cucumber/cucumber";
import { LoginPage } from "../page-objects/loginPage";

const loginPage = new LoginPage();

When(
  "I fill login form with username: {word} and password: {word}",
  async function (username: string, password: string) {
    await loginPage.fillLoginForm(username, password);
  }
);
