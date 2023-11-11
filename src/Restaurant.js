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
    const complimentary = discount.getComplimentaryDiscount();
    OutputView.printComplimentaryService(complimentary);
  }
}
