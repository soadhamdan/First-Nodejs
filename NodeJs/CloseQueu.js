const fs = require('fs');
const readableStream = fs.createReadStream(__filename)
readableStream.close()

readableStream.on('close', () => {
    console.log('This is readableStream close event calpack ')
});
setImmediate(() => {
    console.log("This is a setImmediate 1 ")
});
setTimeout(() => {
    console.log("This is a setTimeout 1 ")

}, 0)
process.nextTick(() => {
    console.log('This is process.nextTick 1 ');

})
Promise.resolve().then(() => {
    console.log('This is a Promise.resolve 1 ')
})