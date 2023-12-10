import { SECTION } from '../Constants/menu.js';
import { ERROR_MSG } from '../Constants/messages.js';
import { ORDER_RULES } from '../Constants/regulations.js';

export default class Order {
  #menu;

  #order = [];

  constructor(menu) {
    this.#menu = menu;
  }

  placeOrder(orders) {
    orders.forEach((order) => {
      const [name, quantity] = order.split('-');
      const found = this.#validate(name, Number(quantity));
      this.#order.push(found);
    });
    this.#checkPolicies();
    return this.#order;
  }

  #validate(name, quantity) {
    const found = this.#menu.find(
      (menu) => menu.getMenuInfo(quantity).name === name,
    );
    if (!found || !quantity || quantity < 1) {
      throw new Error(ERROR_MSG.INVALID_MENU);
    }
    const duplicated = this.#order.find((order) => order.name === name);
    if (duplicated) throw new Error(ERROR_MSG.INVALID_MENU);
    return found.getMenuInfo(quantity);
  }

  #checkPolicies() {
    this.#checkTotalQunatity();
    this.#checkDrinksOnly();
  }

  #checkTotalQunatity() {
    const total = this.#order.reduce(
      (acc, current) => acc + current.quantity,
      0,
    );
    if (total > ORDER_RULES.MAX_POSSIBLE_ORDER) {
      this.#order = [];
      throw new Error(ERROR_MSG.INVALID_MENU);
    }
  }

  #checkDrinksOnly() {
    const drinks = this.#order.filter(
      (order) => order.section === SECTION.DRINK,
    );
    if (drinks.length === this.#order.length) {
      this.#order = [];
      throw new Error(ERROR_MSG.INVALID_MENU);
    }
  }
}
