import Restaurant from './Restaurant.js';

class App {
  async run() {
    const restaurant = new Restaurant();
    await restaurant.greetGuest();
  }
}

const app = new App();
app.run();

export default App;
