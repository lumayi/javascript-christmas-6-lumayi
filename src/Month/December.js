import { ERROR_MSG } from '../Constants/messages';
import { DECEMBER } from '../Constants/regulations';

export default class December {
  #date;

  constructor(date) {
    this.#validate(date);
    this.#date = date;
  }

  #validate(date) {
    if (
      !Number.isInteger(date) ||
      DECEMBER.START_DATE > date ||
      DECEMBER.END_DATE < date
    ) {
      throw new Error(ERROR_MSG.INVALID_DATE);
    }
  }

  getDaysBeforeXmas() {
    const days = this.#date > DECEMBER.XMAS_DATE ? 0 : this.#date - 1;
    return days;
  }

  isWeekend() {
    const date = new Date(`${DECEMBER.YEAR}-${DECEMBER.MONTH}-${this.#date}`);
    const dateToNum = date.getDay();
    if (dateToNum > 4) return true;
    return false;
  }
}
