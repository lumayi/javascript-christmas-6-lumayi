import { SECTION } from '../Constants/menu.js';
import { DISCOUNT } from '../Constants/regulations.js';

export default class Discount {
  #month;

  #order;

  constructor(month, order) {
    this.#month = month;
    this.#order = order;
  }

  getPossibleDiscounts() {
    if (this.#isLessThanMinPrice()) return 0;
    const xMas = this.#getXmasDiscount();
    const weekday = this.#getWeekdayDiscount();
    const weekend = this.#getWeekendDiscount();
    const special = this.#getSpecialDiscount();
    const complimentary = this.#getComplimentaryDiscount();
    return {
      xMas,
      weekday,
      weekend,
      special,
      complimentary,
    };
  }

  #isLessThanMinPrice() {
    const totalPrice = this.#order.reduce(
      (acc, current) => acc + current.totalPrice,
    );
    if (totalPrice < DISCOUNT.MIN_PRICE_FOR_DISCOUNT) return true;
    return false;
  }

  #getXmasDiscount() {
    const days = this.#month.getDaysBeforeXmas();
    if (days === 0) return 0;
    return days * 100 + DISCOUNT.XMAS_BASIC_DISCOUNT;
  }

  #getWeekdayDiscount() {
    const isWeekend = this.#month.isWeekend();
    if (isWeekend) return 0;
    const desserts = this.#order.filter(
      (order) => order.section === SECTION.DESSERT,
    );
    const quantity = desserts.reduce(
      (acc, current) => acc + current.quantity,
      0,
    );
    return quantity * DISCOUNT.DAYS_DISCOUNT;
  }

  #getWeekendDiscount() {
    const isWeekend = this.#month.isWeekend();
    if (!isWeekend) return 0;
    const mains = this.#order.filter((order) => order.section === SECTION.MAIN);
    const quantity = mains.reduce((acc, current) => acc + current.quantity, 0);
    return quantity * DISCOUNT.DAYS_DISCOUNT;
  }

  #getSpecialDiscount() {
    const isSpecialDay = this.#month.isSpecialDay();
    if (isSpecialDay) return DISCOUNT.SPECIAL_DISCOUNT;
    return 0;
  }

  #getComplimentaryDiscount() {
    const totalPrice = this.#order.reduce(
      (acc, current) => acc + current.totalPrice,
      0,
    );
    if (totalPrice >= DISCOUNT.MIN_PRICE_FOR_COMPLIMENTARY) {
      return DISCOUNT.COMPLIMENTARY_DISCOUNT;
    }
    return 0;
  }
}
