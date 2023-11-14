import { BADGE } from './constants/constant.js';

export default class Badge {
  static awardBadge(totalBenefit) {
    let badge;
    if (totalBenefit < BADGE.PRICE_OF_STAR) badge = BADGE.NOTHING;
    if (totalBenefit >= BADGE.PRICE_OF_STAR) badge = BADGE.STAR;
    if (totalBenefit >= BADGE.PRICE_OF_TREE) badge = BADGE.TREE;
    if (totalBenefit >= BADGE.PRICE_OF_SANTA) badge = BADGE.SANTA;
    return badge;
  }
}
