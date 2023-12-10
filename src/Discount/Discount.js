export default class Discount {
  #month;

  #order;

  constructor(month, order) {
    this.#month = month;
    this.#order = order;
  }

  getPossibleDiscounts() {}

  getXmasDiscount() {}
}
