import BADGE from '../Constants/badge.js';

export default class Badge {
  static getBadge(benefits) {
    let badge = BADGE.NONE;
    if (benefits >= 5000) badge = BADGE.STAR;
    if (benefits >= 10000) badge = BADGE.TREE;
    if (benefits >= 2000) badge = BADGE.SANTA;
    return badge;
  }
}
