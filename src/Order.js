import InputView from './InputView';
import { ERROR_MESSAGE, ORDER } from './constants/constant';

export default class Order {
  #menus;

  #orders;

  constructor(menus) {
    this.#menus = menus;
    this.#orders = [];
  }

  async takeOrder() {
    const order = await InputView.readOrder();
  }

  organizeOrder(order) {
    const organized = order.split(',');
    organized.forEach((item) => {
      this.#orders.push(this.#validate(item));
    });
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
}
