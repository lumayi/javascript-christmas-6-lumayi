import { ERROR_MSG } from '../Constants/messages';
import { ORDER_RULES } from '../Constants/regulations';

export default class Order {
  #menu;

  #order = [];

  constructor(menu) {
    this.#menu = menu;
  }

  placeOrder(orders) {
    orders.forEach((order) => {
      const [name, quantity] = order.split('-');
      this.#validate(name, Number(quantity));
      this.#order.push({ name, quantity: Number(quantity) });
    });
  }

  #validate(name, quantity) {
    const found = this.#menu.find(
      (menu) => menu.getMenuInfo(quantity).name === name,
    );
    if (
      !found ||
      !quantity ||
      quantity < 1 ||
      quantity > ORDER_RULES.MAX_POSSIBLE_ORDER
    ) {
      throw new Error(ERROR_MSG.INVALID_MENU);
    }
    const duplicated = this.#order.find((order) => order.name === name);
    if (duplicated) throw new Error(ERROR_MSG.INVALID_MENU);
  }

  #checkPolicies() {}
}
