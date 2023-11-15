export const DISCOUNT = Object.freeze({
  BASIC_1000_DISCOUNT: 1000,
  PER_DAY_XMAS_INCREASE: 100,
  YEAR_2023_DISCOUNT: 2023,
  SPECIAL_DAYS: [3, 10, 17, 24, 25, 31],
  COMPLIMENTARY_CHAMPAGNE: 25000,
  MIN_COMPLIMENTARY_SERVICE_PRICE: 120000,
  MIN_DISCOUNTABLE_PRICE: 10000,
});

export const SECTION = Object.freeze({
  MAIN: 'main',
  APPETIZER: 'appeitzer',
  DESSERT: 'dessert',
  DRINK: 'drink',
});

export const DATE = Object.freeze({
  DECEMBER: 'December',
  YEAR_2023: '2023',
  START: 1,
  LAST: 31,
  XMAS_EXPIRE_DATE: 26,
});

export const ORDER = Object.freeze({
  MAXIMUM_ORDERS: 20,
});

export const BADGE = Object.freeze({
  STAR: '별',
  TREE: '트리',
  SANTA: '산타',
  NOTHING: '없음',
  PRICE_OF_STAR: 5000,
  PRICE_OF_TREE: 10000,
  PRICE_OF_SANTA: 20000,
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_DATE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  INVALID_ORDER: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  DISALLOW_ONLY_DRINKS: '[ERROR] 음료만 주문이 불가합니다. 다시 입력해 주세요.',
  MAXIMUM_ORDERS:
    '[ERROR] 수량 20개 초과시 주문이 불가합니다. 다시 입력해 주세요.',
  DISALLOW_DISCOUNT: '[ERROR] 최소 금액 미만으로 할인 적용 불가',
});
