import { DATE, DISCOUNT, ERROR_MESSAGE } from './constants/constant.js';

export default class December {
  #date;

  #specialDays;

  constructor(date) {
    this.#validate(date);
    this.#date = date;
    this.#specialDays = DISCOUNT.SPECIAL_DAYS;
  }

  #validate(date) {
    if (!Number.isInteger(date) || date < 1 || date > 31) {
      throw Error(ERROR_MESSAGE.INVALID_DATE);
    }
  }

  checkXMasDays() {
    const xMasDays = this.#date < 26 ? this.#date : 0;
    return xMasDays;
  }

  checkIsSpecialDay() {
    const isSpecialDay = this.#specialDays.includes(this.#date);
    return isSpecialDay;
  }

  checkIsWeekend() {
    const date = new Date(`${DATE.DECEMBER} ${this.#date}, ${DATE.YEAR_2023}`);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }
}
