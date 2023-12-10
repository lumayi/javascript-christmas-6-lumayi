import { ERROR_MSG } from '../Constants/messages';

export default class Order {
  #menu;

  #order = [];

  constructor(menu) {
    this.#menu = menu;
  }

  placeOrder(orders) {
    orders.forEach((order) => {
      const [name, quantity] = order.split('-');
      const found = this.#validate(name, quantity);
    });
  }

  #validate(name, quantity) {
    const found = this.#menu.find(
      (menu) => menu.getMenuInfo(quantity).name === name,
    );
    if (!found) throw new Error(ERROR_MSG.INVALID_MENU);
  }
}
