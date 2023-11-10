import InputView from './InputView';
import { ERROR_MESSAGE } from './constants/constant';

export default class Order {
  #menus;

  constructor(menus) {
    this.#menus = menus;
  }

  async takeOrder() {
    const order = await InputView.readOrder();
  }

  organizeOrder(order) {
    const organized = order.split(',');
    organized.forEach((item, index) => {
      this.#validate(item);
    });
  }

  #validate(item) {
    const [name, quantity] = item.split('-');
    const found = this.#menus.find((menu) => menu.name === name);
    if (!found) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  }
}
