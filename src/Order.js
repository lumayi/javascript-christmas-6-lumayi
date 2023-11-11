import { ERROR_MESSAGE, ORDER, SECTION } from './constants/constant';

export default class Order {
  #menus;

  #orders;

  constructor(menus) {
    this.#menus = menus;
    this.#orders = [];
  }

  placeOrder(order) {
    const organized = order.split(',');
    organized.forEach((item) => {
      this.#orders.push(this.#validate(item));
    });
    this.#checkPolicies();
    return this.#orders;
  }

  #validate(item) {
    const [name, quantity] = item.split('-');
    const quantityNumType = Number(quantity);
    const found = this.#menus.find((menu) => menu.name === name);
    if (!found) throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    if (quantityNumType < 1 || !Number.isInteger(quantityNumType)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
    const validated = found.getMenuInfo(quantityNumType);
    const existingMenu = this.#orders.find(
      (order) => order.name === validated.name,
    );
    if (existingMenu) throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    return validated;
  }

  #checkPolicies() {
    this.#checkDrinkPolicy();
    this.#checkQuantityPolicy();
  }

  #checkDrinkPolicy() {
    const drinks = this.#orders.filter(
      (order) => order.section === SECTION.DRINK,
    );
    if (this.#orders.length === drinks.length) {
      throw new Error(ERROR_MESSAGE.DISALLOW_ONLY_DRINKS);
    }
  }

  #checkQuantityPolicy() {
    let totalQuantity = 0;
    this.#orders.forEach((order) => {
      totalQuantity += order.quantity;
      if (totalQuantity > ORDER.MAXIMUM_ORDERS) {
        throw new Error(ERROR_MESSAGE.MAXIMUM_ORDERS);
      }
    });
  }
}
