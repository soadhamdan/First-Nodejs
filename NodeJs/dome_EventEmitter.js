const event = require('node:events');
const eventEmitter = event.EventEmitter();
// const myEventHandler = function() {
//         console.log("I hear a scream!");
//     }
//     //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);
// //Fire the 'scream' event:
// eventEmitter.emit('scream');
const emitter = new event();
emitter.on('order-pizza', (size, topic) => {
    console.log(`Order Reaved : blocking ${size} pizza with ${topic}`)

})
emitter.on('order-pizza', (size) => {
    if (size === "large") {
        console.log('serving complimentary Drink')
    }
})
emitter.emit('order-pizza', "large", 'mete')