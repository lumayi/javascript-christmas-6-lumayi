import { SECTION } from '../Constants/menu';
import { DISCOUNT } from '../Constants/regulations';

export default class Discount {
  #month;

  #order;

  constructor(month, order) {
    this.#month = month;
    this.#order = order;
  }

  getPossibleDiscounts() {}

  getXmasDiscount() {
    const days = this.#month.getDaysBeforeXmas();
    if (days === 0) return 0;
    return days * 100 + DISCOUNT.XMAS_BASIC_DISCOUNT;
  }

  getWeekdayDiscount() {
    const isWeekend = this.#month.isWeekend();
    const desserts = this.#order.filter(
      (order) => order.section === SECTION.DESSERT,
    );
    if (!isWeekend) return desserts.length * DISCOUNT.DAYS_DISCOUNT;
  }

  getWeekendDiscount() {
    const isWeekend = this.#month.isWeekend();
    const mains = this.#order.filter((order) => order.section === SECTION.MAIN);
    if (isWeekend) return mains.length * DISCOUNT.DAYS_DISCOUNT;
  }
}
