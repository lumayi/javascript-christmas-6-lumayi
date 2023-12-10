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
    if (isWeekend) return 0;
    const desserts = this.#order.filter(
      (order) => order.section === SECTION.DESSERT,
    );
    return desserts.length * DISCOUNT.DAYS_DISCOUNT;
  }

  getWeekendDiscount() {
    const isWeekend = this.#month.isWeekend();
    if (!isWeekend) return 0;
    const mains = this.#order.filter((order) => order.section === SECTION.MAIN);
    return mains.length * DISCOUNT.DAYS_DISCOUNT;
  }

  getSpecialDiscount() {
    const isSpecialDay = this.#month.isSpecialDay();
    if (isSpecialDay) return DISCOUNT.SPECIAL_DISCOUNT;
    return 0;
  }
}
