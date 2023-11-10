import { DISCOUNT } from './constants/constant.js';

export default class Discount {
  #month;

  constructor(calendar) {
    this.#month = calendar;
  }

  getXMasDicount() {
    const xMasDays = this.#month.checkXMasDays();
    if (!xMasDays) return 0;

    const total =
      DISCOUNT.BASIC_1000_DISCOUNT +
      DISCOUNT.PER_DAY_XMAS_INCREASE * (xMasDays - 1);
    return total;
  }

  getWeekdayDiscount(desserts) {
    return desserts * DISCOUNT.YEAR_2023_DISCOUNT;
  }

  getWeekendDiscount(mains) {
    return mains * DISCOUNT.YEAR_2023_DISCOUNT;
  }

  getSpecialDayDiscount() {
    const isSpecialDay = this.#month.checkIsSpecialDay();
    if (!isSpecialDay) return 0;
    return DISCOUNT.BASIC_1000_DISCOUNT;
  }

  getComplimentaryDiscount(price) {
    let champagne = DISCOUNT.COMPLIMENTARY_CHAMPAGNE;
    if (price < 120000) {
      champagne = 0;
    }
    return champagne;
  }
}
