import { Console } from '@woowacourse/mission-utils';
import toKoreanCurrency from './utils/formatter.js';
import Order from './Order.js';

const OutputView = {
  printMenu(order) {
    Console.print('\n<주문 메뉴>');
    order.forEach((menu) => {
      Console.print(`${menu.name} ${menu.quantity}개`);
    });
  },
  printGreet() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
  printBenefits(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
    );
  },
  printBeforeDiscount(order) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${toKoreanCurrency(Order.calculateTotalPrice(order))}원`);
  },
  printComplimentaryService(complimentary) {
    Console.print('\n<증정 메뉴>');
    if (complimentary) return Console.print('샴페인 1개');
    return Console.print('없음');
  },
  printDetailsOfBenefits(xmas, week, weekend, special, complimentary) {
    Console.print('\n<혜택 내역>');
    if (xmas) {
      Console.print(`크리스마스 디데이 할인: -${toKoreanCurrency(xmas)}원`);
    }
    if (week) Console.print(`평일 할인: -${toKoreanCurrency(week)}원`);
    if (weekend) Console.print(`주말 할인: -${toKoreanCurrency(weekend)}원`);
    if (special) Console.print(`특별 할인: -${toKoreanCurrency(special)}원`);
    if (complimentary) {
      Console.print(`증정 이벤트: -${toKoreanCurrency(complimentary)}원`);
    }
    if (!xmas && !week && !weekend && !special && !complimentary) {
      Console.print('없음');
    }
  },
  printTotalDiscountPrice(discounts) {
    const price = Object.values(discounts).reduce(
      (acc, current) => acc + current,
      0,
    );
    Console.print('\n<총혜택 금액>');
    if (!price) return Console.print('없음');
    return Console.print(`-${toKoreanCurrency(price)}원`);
  },
  printFinalCheckPrice(order, discounts) {
    const price = Order.calculateTotalPrice(order);
    const { xmas, week, weekend, special } = discounts;
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(
      `${toKoreanCurrency(price - (xmas + week + weekend + special))}원`,
    );
  },
};

export default OutputView;
