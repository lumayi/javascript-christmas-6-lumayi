import Order from './Order.js';
import { DISCOUNT, SECTION } from './constants/constant.js';

export default class Discount {
  #month;

  #order;

  constructor(month, order) {
    this.#month = month;
    this.#order = order;
  }

  #validateMinimumPrice(order) {
    let discountable = true;
    const price = Order.calculateTotalPrice(order);
    if (price < DISCOUNT.MIN_DISCOUNTABLE_PRICE) {
      discountable = false;
    }
    return discountable;
  }

  getPossibleDiscounts() {
    const discountable = this.#validateMinimumPrice(this.#order);
    if (!discountable) return 0;
    return {
      complimentary: this.#getComplimentaryDiscount(),
      xmas: this.#getXMasDicount(),
      week: this.#getWeekdayDiscount(),
      weekend: this.#getWeekendDiscount(),
      special: this.#getSpecialDayDiscount(),
    };
  }

  #getXMasDicount() {
    const xMasDays = this.#month.checkXMasDays();
    if (!xMasDays) return 0;

    const total =
      DISCOUNT.BASIC_1000_DISCOUNT +
      DISCOUNT.PER_DAY_XMAS_INCREASE * (xMasDays - 1);
    return total;
  }

  #getWeekdayDiscount() {
    const isWeekend = this.#month.checkIsWeekend();
    if (isWeekend) return 0;
    const desserts = this.#order.filter(
      (order) => order.section === SECTION.DESSERT,
    );
    const quantity = Order.calculateTotalQuantity(desserts);
    return quantity * DISCOUNT.YEAR_2023_DISCOUNT;
  }

  #getWeekendDiscount() {
    const isWeekend = this.#month.checkIsWeekend();
    if (!isWeekend) return 0;
    const mains = this.#order.filter((order) => order.section === SECTION.MAIN);
    const quantity = Order.calculateTotalQuantity(mains);
    return quantity * DISCOUNT.YEAR_2023_DISCOUNT;
  }

  #getSpecialDayDiscount() {
    const isSpecialDay = this.#month.checkIsSpecialDay();
    if (!isSpecialDay) return 0;
    return DISCOUNT.BASIC_1000_DISCOUNT;
  }

  #getComplimentaryDiscount() {
    const price = Order.calculateTotalPrice(this.#order);
    let champagne = DISCOUNT.COMPLIMENTARY_CHAMPAGNE;
    if (price < DISCOUNT.MIN_COMPLIMENTARY_SERVICE_PRICE) {
      champagne = 0;
    }
    return champagne;
  }
}
