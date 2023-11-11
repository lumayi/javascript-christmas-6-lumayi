import December from './December';
import Discount from './Discount';
import InputView from './InputView';
import Menus from './Menu';
import Order from './Order';
import OutputView from './OutputView';

export default class Restaurant {
  async greetGuest() {
    const menus = Menus();
    const order = new Order(menus);
    OutputView.printGreet();
    const date = await InputView.readDate();
    const input = await InputView.readOrder();
    OutputView.printBenefits(date);
    const organizedOrder = order.placeOrder(input);
    OutputView.printMenu(organizedOrder);
    OutputView.printBeforeDiscount(organizedOrder);
    const december = new December(date);
    const discount = new Discount(december, organizedOrder);
    const complimentary = discount.getComplimentaryDiscount();
    OutputView.printComplimentaryService(complimentary);
  }
}
