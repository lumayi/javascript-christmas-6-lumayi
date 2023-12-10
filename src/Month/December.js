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
}
