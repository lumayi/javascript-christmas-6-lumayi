import { DISCOUNT, SECTION } from './constants/constant.js';

export default class Discount {
  #month;

  #order;

  constructor(month, order) {
    this.#month = month;
    this.#order = order;
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
    const price = this.#calculateTotalPrice();
    let champagne = DISCOUNT.COMPLIMENTARY_CHAMPAGNE;
    if (price < DISCOUNT.MIN_COMPLIMENTARY_SERVICE_PRICE) {
      champagne = 0;
    }
    return champagne;
  }

  #calculateTotalPrice() {
    let price = 0;
    this.#order.forEach((order) => {
      price += order.totalPrice;
    });
    return price;
  }
}
