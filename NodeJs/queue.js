const fs = require('fs');
fs.readFile(__filename, () => {
    console.log('This is readFile 1');
    setImmediate(() => { console.log("This is setImmediate inner  readFile") })
    process.nextTick(() => { console.log('This is a inner process.nextTick callback inlaid readFile'); })
    Promise.resolve().then(() => { console.log('This is a inner promise.resolve inlaid readFile') })
})
process.nextTick(() => { console.log('This is a process.nextTick callback 1'); })
Promise.resolve().then(() => { console.log('This is a promise.resolve 1') })

setTimeout(() => { console.log('this is setTimeout 1') }, 0);

setImmediate(() => { console.log("This is setImmediate 1 ") })
for (let i = 0; i < 2000000000; i++) {}