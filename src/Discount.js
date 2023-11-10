import { DISCOUNT } from './constants/constant';

export default class Discount {
  getXmasDicount(date) {
    if (date > 25) return 0;
    let total = DISCOUNT.XMAS_START_AMOUNT;
    total += DISCOUNT.PER_DAY_XMAS_INCREASE * (date - 1);
    return total;
  }
}
