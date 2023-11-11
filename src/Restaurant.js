import InputView from './InputView';
import Menus from './Menu';
import OutputView from './OutputView';

export default class Restaurant {
  async greetGuest() {
    const menus = Menus();

    OutputView.printGreet();
    const date = await InputView.readDate();
    const order = await InputView.readOrder();
  }
}
