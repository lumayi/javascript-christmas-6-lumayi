import { DISCOUNT } from './constants/constant';

export default class Discount {
  getXmasDicount(date) {
    if (date > 25) return 0;
    let total = DISCOUNT.XMAS_START_AMOUNT;
    total += DISCOUNT.PER_DAY_XMAS_INCREASE * (date - 1);
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
}
