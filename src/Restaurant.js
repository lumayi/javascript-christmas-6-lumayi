import WoowahanMenu from './Menu/Menu';
import December from './Month/December';
import Order from './Order/Order';
import InputView from './Views/InputView';
import OutputView from './Views/OutputView';

export default class Restaurant {
  order = new Order(WoowahanMenu);

  async greetGuest() {
    OutputView.printGreet();
    const december = await this.#getVisitDate();
    const placedOrder = await this.#getUserOrder(this.order);
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
