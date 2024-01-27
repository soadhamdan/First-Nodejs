const eventEmitter = require('node:events')
class pizzaShope extends eventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;

    }
    order(size, topping) {
        this.orderNumber++;
        this.emit('order', size, topping)
    }
    displayOrderNumber() {
        console.log(`Current Order Number :${this.orderNumber}`)
    }
}
module.exports = pizzaShope;