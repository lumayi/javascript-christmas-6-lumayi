import { DISCOUNT, ERROR_MESSAGE, SECTION } from './constants/constant.js';

export default class Discount {
  #month;

  #order;

  constructor(month, order) {
    this.#validateMinimumPrice(order);
    this.#month = month;
    this.#order = order;
  }

  #validateMinimumPrice() {
    const price = this.#calculateTotalPrice();
    if (price < DISCOUNT.MIN_DISCOUNTABLE_PRICE) {
      throw new Error(ERROR_MESSAGE.DISALLOW_DISCOUNT);
    }
  }

  #calculateTotalPrice(order) {
    let price = 0;
    order.forEach((menu) => {
      price += menu.totalPrice;
    });
    return price;
  }

  getXMasDicount() {
    const xMasDays = this.#month.checkXMasDays();
    if (!xMasDays) return 0;

    const total =
      DISCOUNT.BASIC_1000_DISCOUNT +
      DISCOUNT.PER_DAY_XMAS_INCREASE * (xMasDays - 1);
    return total;
  }

  getWeekdayDiscount() {
    const desserts = this.#order.filter(
      (order) => order.section === SECTION.DESSERT,
    );
    return desserts * DISCOUNT.YEAR_2023_DISCOUNT;
  }

  getWeekendDiscount() {
    const mains = this.#order.filter((order) => order.section === SECTION.MAIN);
    return mains * DISCOUNT.YEAR_2023_DISCOUNT;
  }

  getSpecialDayDiscount() {
    const isSpecialDay = this.#month.checkIsSpecialDay();
    if (!isSpecialDay) return 0;
    return DISCOUNT.BASIC_1000_DISCOUNT;
  }

  getComplimentaryDiscount() {
    const price = this.#calculateTotalPrice(this.#order);
    let champagne = DISCOUNT.COMPLIMENTARY_CHAMPAGNE;
    if (price < DISCOUNT.MIN_COMPLIMENTARY_SERVICE_PRICE) {
      champagne = 0;
    }
    return champagne;
  }
}
