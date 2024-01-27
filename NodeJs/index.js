const pizzaShope = require('./pizza-Shope');
const drinkMachine = require('./drink-machine')

const pizzaShopeS = new pizzaShope();
const DrinkMachine = new drinkMachine();

pizzaShopeS.on('order', (size, topping) => {
    console.log(`Order Reaved : blocking ${size} pizza with ${topping}`)
    DrinkMachine.servingDrink(size)
})
pizzaShopeS.order('large', 'Meat');
pizzaShopeS.displayOrderNumber()