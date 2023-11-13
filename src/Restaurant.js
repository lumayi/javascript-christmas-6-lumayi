import Badge from './Badge.js';
import December from './December.js';
import Discount from './Discount.js';
import InputView from './InputView.js';
import Menus from './Menu.js';
import Order from './Order.js';
import OutputView from './OutputView.js';

export default class Restaurant {
  async greetGuest() {
    OutputView.printGreet();
    const date = await InputView.readDate();
    const december = new December(date);
    const order = await this.#takeOrder(Menus, date);
    const discounts = this.#getDiscount(december, order);
    this.#printAppliedBenefits(discounts, order);
    this.#getAwardedBadge(discounts);
  }

  #getAwardedBadge(discounts) {
    const badge = Badge.awardBadge(
      Object.values(discounts).reduce((a, c) => a + c, 0),
    );
    OutputView.printEventBadge(badge);
  }

  #printAppliedBenefits(discounts, order) {
    this.#showBenefits(discounts);
    OutputView.printTotalDiscountPrice(discounts);
    OutputView.printFinalCheckPrice(order, discounts);
  }

  #getDiscount(month, order) {
    const discount = new Discount(month, order);
    const possibleDiscounts = discount.getPossibleDiscounts();
    return possibleDiscounts;
  }

  async #takeOrder(menu, date) {
    const order = new Order(menu);
    const input = await InputView.readOrder();
    const organizedOrder = order.placeOrder(input);
    OutputView.printBenefits(date);
    OutputView.printMenu(organizedOrder);
    OutputView.printBeforeDiscount(organizedOrder);
    return organizedOrder;
  }

  #showBenefits(discounts) {
    const { complimentary, xmas, week, weekend, special } = discounts;
    OutputView.printComplimentaryService(complimentary);
    OutputView.printDetailsOfBenefits(
      xmas,
      week,
      weekend,
      special,
      complimentary,
    );
  }
}
