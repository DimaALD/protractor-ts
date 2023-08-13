import { LoginPage } from "./loginPage";
import { HomePage } from "./homePage";

export function getPage(page: string) {
  switch (page) {
    case "Login":
      return new LoginPage();
    case "Home":
      return new HomePage();
  }
}
