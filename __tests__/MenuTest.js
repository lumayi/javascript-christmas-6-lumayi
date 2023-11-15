import { Menu } from '../src/Menu';

describe('기능 테스트', () => {
  const menuItems = [
    ['양송이수프', 6000, 'appetizer', 4, 24000],
    ['해산물파스타', 35000, 'main', 2, 70000],
    ['아이스크림', 5000, 'dessert', 3, 15000],
  ];
  test.each(menuItems)(
    '수량과 가격을 곱한 해당 메뉴의 총 금액을 리턴한다.',
    (name, price, section, quantity, expected) => {
      // given
      const menu = new Menu(name, price, section);
      // when
      const totalPrice = menu.getMenuInfo(quantity).totalPrice;
      // then
      expect(totalPrice).toBe(expected);
    },
  );
});
