import { DISCOUNT } from './constants/constant.js';

export default class Discount {
  #month;

  constructor(calendar) {
    this.#month = calendar;
  }

  getXmasDicount() {
    const xMasDays = this.#month.checkXMasDays();
    if (!xMasDays) return 0;

    let total = DISCOUNT.BASIC_1000_DISCOUNT;
    total += DISCOUNT.PER_DAY_XMAS_INCREASE * (xMasDays - 1);
    return total;
  }

  getWeekdayDiscount(desserts) {
    const total = desserts * DISCOUNT.YEAR_2023_DISCOUNT;
    return total;
  }

  getWeekendDiscount(mains) {
    const total = mains * DISCOUNT.YEAR_2023_DISCOUNT;
    return total;
  }

  getSpecialDayDiscount() {
    const isSpecialDay = this.#month.checkIsSpecialDay();
    if (!isSpecialDay) return 0;

    const total = DISCOUNT.BASIC_1000_DISCOUNT;
    return total;
  }

  getComplimentaryDiscount(price) {
    let champagne = DISCOUNT.COMPLIMENTARY_CHAMPAGNE;
    if (price < 120000) {
      champagne = 0;
    }
    return champagne;
  }
}
