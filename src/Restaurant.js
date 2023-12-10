import Discount from './Discount/Discount.js';
import WoowahanMenu from './Menu/Menu.js';
import December from './Month/December.js';
import Order from './Order/Order.js';
import InputView from './Views/InputView.js';
import OutputView from './Views/OutputView.js';

export default class Restaurant {
  order = new Order(WoowahanMenu);

  async greetGuest() {
    OutputView.printGreet();
    const december = await this.#getVisitDate();
    const placedOrder = await this.#getUserOrder(this.order);
    OutputView.printOrder(placedOrder);
    const discount = new Discount(december, placedOrder);
    const discounts = discount.getPossibleDiscounts();
    OutputView.printBenefits(discounts, placedOrder);
  }

  async #getVisitDate() {
    try {
      const userDate = await InputView.readDate();
      const december = new December(userDate);
      return december;
    } catch (error) {
      OutputView.printError(error);
      return this.#getVisitDate();
    }
  }

  async #getUserOrder() {
    try {
      const userOrder = await InputView.getOrder();
      const validatedOrders = this.order.placeOrder(userOrder);
      return validatedOrders;
    } catch (error) {
      OutputView.printError(error);
      return this.#getUserOrder();
    }
  }
}
