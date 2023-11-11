import December from './December.js';
import Discount from './Discount.js';
import InputView from './InputView.js';
import Menus from './Menu.js';
import Order from './Order.js';
import OutputView from './OutputView.js';

export default class Restaurant {
  async greetGuest() {
    const order = new Order(Menus);
    OutputView.printGreet();
    const date = await InputView.readDate();
    const december = new December(date);
    const input = await InputView.readOrder();
    OutputView.printBenefits(date);
    const organizedOrder = order.placeOrder(input);
    OutputView.printMenu(organizedOrder);
    OutputView.printBeforeDiscount(organizedOrder);
    const discount = new Discount(december, organizedOrder);
    this.#anounceBenefits(discount);
  }

  #anounceBenefits(discount) {
    const complimentary = discount.getComplimentaryDiscount();
    const xmas = discount.getXMasDicount();
    const week = discount.getWeekdayDiscount();
    const weekend = discount.getWeekendDiscount();
    const special = discount.getSpecialDayDiscount();
    OutputView.printComplimentaryService(complimentary);
    OutputView.printDetailsOfBenefits(
      xmas,
      week,
      weekend,
      special,
      complimentary,
    );
  }
}
