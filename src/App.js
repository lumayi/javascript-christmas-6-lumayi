import Restaurant from './Restaurant.js';

class App {
  async run() {
    const restaurant = new Restaurant();
    await restaurant.greetGuest();
  }
}

export default App;
