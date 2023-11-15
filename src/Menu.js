import { SECTION } from './constants/constant.js';

export class Menu {
  #name;

  #price;

  #section;

  constructor(name, price, section) {
    this.#name = name;
    this.#price = price;
    this.#section = section;
  }

  getMenuInfo(quantity) {
    const totalPrice = this.#price * quantity;
    return {
      name: this.#name,
      quantity,
      totalPrice,
      section: this.#section,
    };
  }
}

const Menus = [
  new Menu('양송이수프', 6000, SECTION.APPETIZER),
  new Menu('타파스', 5500, SECTION.APPETIZER),
  new Menu('시저샐러드', 8000, SECTION.APPETIZER),
  new Menu('티본스테이크', 55000, SECTION.MAIN),
  new Menu('바비큐립', 54000, SECTION.MAIN),
  new Menu('해산물파스타', 35000, SECTION.MAIN),
  new Menu('크리스마스파스타', 25000, SECTION.MAIN),
  new Menu('초코케이크', 15000, SECTION.DESSERT),
  new Menu('아이스크림', 5000, SECTION.DESSERT),
  new Menu('제로콜라', 3000, SECTION.DRINK),
  new Menu('레드와인', 60000, SECTION.DRINK),
  new Menu('샴페인', 25000, SECTION.DRINK),
];

export default Menus;
