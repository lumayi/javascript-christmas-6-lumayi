import { Console } from '@woowacourse/mission-utils';
import { toKoreanCurrency } from './utils/formatter';
import Order from './Order';

const OutputView = {
  printMenu(order) {
    Console.print('\n<주문 메뉴>\n');
    order.forEach((menu) => {
      Console.print(`${menu.name} ${menu.quantity}개\n`);
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
    Console.print('<할인 전 총주문 금액>\n');
    Console.print(`${toKoreanCurrency(Order.calculateTotalPrice(order))}원\n`);
  },
  printComplimentaryService(complimentary) {
    Console.print('<증정 메뉴>');
    if (complimentary) return Console.print('샴페인 1개');
    return Console.print('<없음>');
  },
};

export default OutputView;
