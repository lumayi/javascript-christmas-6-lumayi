import { Console } from '@woowacourse/mission-utils';
import toKoreanCurrency from '../Utils/utils.js';

const OutputView = {
  printGreet() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
  printOrder(orders) {
    const totalPrice = orders.reduce(
      (acc, current) => acc + current.totalPrice,
      0,
    );
    Console.print('12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n');
    Console.print('<주문 메뉴>');
    orders.forEach((order) => {
      Console.print(`${order.name} ${order.quantity}개`);
    });
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${toKoreanCurrency(totalPrice)}원`);
  },
  printBenefits(discounts, order) {
    this.printComplimentary(discounts);
    this.printEachBenefits(discounts);
    this.printTotals(discounts);
    this.printAfterDCPrice(discounts, order);
  },
  printComplimentary({ complimentary }) {
    Console.print('\n<증정 메뉴>');
    Console.print(complimentary ? '샴페인 1개' : '없음');
  },
  printEachBenefits({ xMas, weekday, weekend, special, complimentary }) {
    Console.print('\n<혜택 내역>');
    if (xMas) {
      Console.print(`크리스마스 디데이 할인: -${toKoreanCurrency(xMas)}원`);
    }
    if (weekday) Console.print(`평일 할인: -${toKoreanCurrency(weekday)}원`);
    if (weekend) Console.print(`주말 할인: -${toKoreanCurrency(weekend)}원`);
    if (special) Console.print(`특별 할인: -${toKoreanCurrency(special)}원`);
    if (complimentary) {
      Console.print(`증정 이벤트: -${toKoreanCurrency(complimentary)}원`);
    }
    if (!xMas && !weekday && !weekend && !special && !complimentary) {
      Console.print('없음');
    }
  },
  printTotals({ xMas, weekday, weekend, special, complimentary }) {
    const total = xMas + weekday + weekend + special + complimentary;
    Console.print('\n<총혜택 금액>');
    Console.print(`-${toKoreanCurrency(total)}원`);
  },
  printAfterDCPrice(discounsts, order) {
    const { xMas, weekday, weekend, special } = discounsts;
    const totalPrice = order.reduce(
      (acc, current) => acc + current.totalPrice,
      0,
    );
    const afterDCPrice = totalPrice - (xMas + weekday + weekend + special);
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${toKoreanCurrency(afterDCPrice)}원`);
  },
  printError(error) {
    Console.print(error.message);
  },
};
export default OutputView;
