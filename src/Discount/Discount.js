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
}
