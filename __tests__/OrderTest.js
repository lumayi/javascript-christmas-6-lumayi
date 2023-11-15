import Order from '../src/Order';
import Menus from '../src/Menu';

describe('기능 테스트', () => {
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
  test('주문 총액을 리턴한다.', () => {
    const price = Order.calculateTotalPrice(order);
    expect(price).toBe(180000);
  });
  test('주문 총 개수를 리턴한다.', () => {
    const quantity = Order.calculateTotalQuantity(order);
    expect(quantity).toBe(6);
  });
  test('주문 정보를 리턴한다.', () => {
    // given
    const orders = new Order(Menus);

    // when
    const input = '티본스테이크-3,아이스크림-3';
    const placedOrder = orders.placeOrder(input);

    // then
    expect(placedOrder).toEqual(order);
  });
});
describe('예외 테스트', () => {
  let order;
  beforeEach(() => {
    order = new Order(Menus);
  });
  test('메뉴판에 없는 메뉴일 경우, 예외 처리', () => {
    // when
    const input = '수박쥬스-3,까르보나라-2';

    // then
    expect(() => {
      order.placeOrder(input);
    }).toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });
  test('중복으로 메뉴를 입력한 경우, 예외 처리', () => {
    // when
    const input = '티본스테이크-1,티본스테이크-1';

    // then
    expect(() => order.placeOrder(input)).toThrow(
      '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
    );
  });
  test('주문 형식이 맞지 않을 경우, 예외 처리', () => {
    // when
    const input = '티본스테이크1,아이스크림1';

    // then
    expect(() => order.placeOrder(input)).toThrow(
      '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
    );
  });
  test('음료만 주문한 경우, 예외 처리', () => {
    // when
    const input = '제로콜라-10';

    // then
    expect(() => order.placeOrder(input)).toThrow(
      '[ERROR] 음료만 주문이 불가합니다. 다시 입력해 주세요.',
    );
  });
  test('주문 수량이 20개 초과인 경우, 예외 처리', () => {
    // when
    const input = '제로콜라-10,크리스마스파스타-11';

    // then
    expect(() => order.placeOrder(input)).toThrow(
      '[ERROR] 수량 20개 초과시 주문이 불가합니다. 다시 입력해 주세요.',
    );
  });
});
