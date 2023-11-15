import December from '../src/December';
import Discount from '../src/Discount';

describe('기능테스트', () => {
  const order = [
    {
      name: '티본스테이크',
      quantity: 3,
      totalPrice: 165000,
      section: 'main',
    },
    {
      name: '아이스크림',
      quantity: 3,
      totalPrice: 15000,
      section: 'dessert',
    },
  ];
  test('25일 할인 금액을 리턴한다.', () => {
    // given
    const date = 25;
    const month = new December(date);
    const discount = new Discount(month, order);

    // when
    const possibleDiscounts = discount.getPossibleDiscounts();
    const expected = {
      complimentary: 25000,
      xmas: 3400,
      week: 2023 * 3,
      weekend: 0,
      special: 1000,
    };

    // then
    expect(possibleDiscounts).toEqual(expected);
  });
  test('30일 할인 금액을 리턴한다.', () => {
    // given
    const date = 30;
    const month = new December(date);
    const discount = new Discount(month, order);

    // when
    const possibleDiscounts = discount.getPossibleDiscounts();
    const expected = {
      complimentary: 25000,
      xmas: 0,
      week: 0,
      weekend: 2023 * 3,
      special: 0,
    };

    // then
    expect(possibleDiscounts).toEqual(expected);
  });
});

describe('예외 테스트', () => {
  const order = [
    {
      name: '아이스크림',
      quantity: 1,
      totalPrice: 5000,
      section: 'dessert',
    },
  ];
  test('1만원 이하의 금액은 할인이 불가하다.', () => {
    // given
    const date = 3;
    const month = new December(date);
    const discount = new Discount(month, order);

    // when
    const possibleDiscounts = discount.getPossibleDiscounts();
    const expected = 0;

    // then
    expect(possibleDiscounts).toBe(expected);
  });
});
