import { $ } from "protractor";

export class Header {
  constructor() {}

  private root = $("#header_container");
  public logo = this.root.$(".app_logo");
  public burgerBtn = this.root.$("#react-burger-menu-btn");
  public cartIconLink = this.root.$(".shopping_cart_link");
}
