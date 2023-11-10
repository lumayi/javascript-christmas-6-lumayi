class Menu {
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
    return { name: this.#name, totalPrice, section: this.#section };
  }
}

const Menus = [
  new Menu('양송이수프', 6000, 'appetizer'),
  new Menu('타파스', 5500, 'appetizer'),
  new Menu('시저샐러드', 8000, 'appetizer'),
  new Menu('티본스테이크', 55000, 'main'),
  new Menu('바비큐립', 54000, 'main'),
  new Menu('해산물파스타', 35000, 'main'),
  new Menu('크리스마스파스타', 25000, 'main'),
  new Menu('초코케이크', 15000, 'dessert'),
  new Menu('아이스크림', 5000, 'dessert'),
  new Menu('제로콜라', 3000, 'drink'),
  new Menu('레드와인', 60000, 'drink'),
  new Menu('샴페인', 25000, 'drink'),
];

export default Menus;
