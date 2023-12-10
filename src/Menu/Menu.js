import { NAME, PRICE, SECTION } from '../Constants/menu';

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
    return {
      name: this.#name,
      section: this.#section,
      quantity,
      totalPrice,
    };
  }
}

const WoowahanMenu = [
  new Menu(NAME.MUSHROOM_SOUP, PRICE.MUSHROOM_SOUP, SECTION.APPETIZER),
  new Menu(NAME.TAPAS, PRICE.TAPAS, SECTION.APPETIZER),
  new Menu(NAME.CEASER_SALAD, PRICE.CEASER_SALAD, SECTION.APPETIZER),
  new Menu(NAME.T_BONE, PRICE.T_BONE, SECTION.MAIN),
  new Menu(NAME.BBQ_RIB, PRICE.BBQ_RIB, SECTION.MAIN),
  new Menu(NAME.SEAFOOD_PASTA, PRICE.SEAFOOD_PASTA, SECTION.MAIN),
  new Menu(NAME.XMAS_PASTA, PRICE.XMAS_PASTA, SECTION.MAIN),
  new Menu(NAME.CHOCO_CAKE, PRICE.CHOCO_CAKE, SECTION.DESSERT),
  new Menu(NAME.ICECREAM, PRICE.ICECREAM, SECTION.DESSERT),
  new Menu(NAME.ZERO_COKE, PRICE.ZERO_COKE, SECTION.DRINK),
  new Menu(NAME.RED_WINE, PRICE.RED_WINE, SECTION.DRINK),
  new Menu(NAME.CHAMPAGNE, PRICE.CHAMPAGNE, SECTION.DRINK),
];

export default WoowahanMenu;
