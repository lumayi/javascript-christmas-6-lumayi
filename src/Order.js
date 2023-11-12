import { ERROR_MESSAGE, ORDER, SECTION } from './constants/constant.js';

export default class Order {
  #menus;

  #orders;

  constructor(menus) {
    this.#menus = menus;
    this.#orders = [];
  }

  static calculateTotalPrice(order) {
    let price = 0;
    order.forEach((menu) => {
      price += menu.totalPrice;
    });
    return price;
  }

  static calculateTotalQuantity(order) {
    let quantity = 0;
    order.forEach((menu) => {
      quantity += menu.quantity;
    });
    return quantity;
  }

  placeOrder(order) {
    const organized = order.split(',');
    organized.forEach((item) => {
      const [name, quantity] = item.split('-');
      this.#orders.push(this.#validate(name, Number(quantity)));
    });
    this.#checkPolicies();
    return this.#orders;
  }

  #validate(name, quantity) {
    const found = this.#menus.find(
      (menu) => menu.getMenuInfo(quantity).name === name,
    );
    if (!found) throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    if (quantity < 1 || !Number.isInteger(quantity)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
    const validated = found.getMenuInfo(quantity);
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
