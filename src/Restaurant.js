import { Console } from '@woowacourse/mission-utils';
import Badge from './Badge.js';
import December from './December.js';
import Discount from './Discount.js';
import InputView from './InputView.js';
import Menus from './Menu.js';
import Order from './Order.js';
import OutputView from './OutputView.js';

export default class Restaurant {
  #order;

  constructor() {
    this.#order = new Order(Menus);
  }

  async greetGuest() {
    OutputView.printGreet();
    const { date, month } = await this.#askDate();
    const order = await this.#takeOrder();
    this.#showDetailsOfBenefits(date, order);
    const discounts = this.#getDiscount(month, order);
    this.#printAppliedBenefits(discounts, order);
    this.#getAwardedBadge(discounts);
  }

  async #askDate() {
    try {
      const date = await InputView.readDate();
      const month = new December(date);
      return { date, month };
    } catch (error) {
      Console.print(error.message);
      return this.#askDate();
    }
  }

  async #takeOrder() {
    try {
      const input = await InputView.readOrder();
      const organizedOrder = this.#order.placeOrder(input);
      return organizedOrder;
    } catch (error) {
      Console.print(error.message);
      return this.#takeOrder();
    }
  }

  #showDetailsOfBenefits(date, order) {
    OutputView.printBenefits(date);
    OutputView.printMenu(order);
    OutputView.printBeforeDiscount(order);
  }

  #getDiscount(month, order) {
    const discount = new Discount(month, order);
    const possibleDiscounts = discount.getPossibleDiscounts();
    return possibleDiscounts;
  }

  #printAppliedBenefits(discounts, order) {
    const { complimentary, xmas, week, weekend, special } = discounts;
    OutputView.printComplimentaryService(complimentary);
    OutputView.printDetailsOfBenefits(
      xmas,
      week,
      weekend,
      special,
      complimentary,
    );
    OutputView.printTotalDiscountPrice(discounts);
    OutputView.printFinalCheckPrice(order, discounts);
  }

  #getAwardedBadge(discounts) {
    const badge = Badge.awardBadge(
      Object.values(discounts).reduce((a, c) => a + c, 0),
    );
    OutputView.printEventBadge(badge);
  }
}
