setImmediate(() => {
    console.log("This is a setImmediate 1 ")
})
setImmediate(() => {
    console.log("This is a setImmediate 2");
    process.nextTick(() => {
        console.log('This is process.nextTick 1 ');

    })
    Promise.resolve().then(() => {
        console.log('This is a Promise.resolve 1 ')
    })
})
setImmediate(() => {
    console.log("This is a setImmediate 3")
})