import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printGreet() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
  printBenefits() {
    Console.print('12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n');
  },
  printError(error) {
    Console.print(error.message);
  },
};
export default OutputView;
