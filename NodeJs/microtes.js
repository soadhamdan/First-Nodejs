// console.log('Start');

// process.nextTick(() => {
//     console.log('This is a process.nextTick callback');
// });

// console.log('End');
// Promise.resolve().then(() => {
//     console.log('هذا microtask');
// });
setTimeout(() => { console.log('this is setTimeout 1') }, 0);
setTimeout(() => {
    console.log('this is setTimeout 2');
    process.nextTick(() => { console.log('This is a process.nextTick inside setTimeout  ') })

}, 0);
setTimeout(() => { console.log('this is setTimeout 3') }, 0);

process.nextTick(() => {
    console.log('This is a process.nextTick callback 1');
})
process.nextTick(() => {
    console.log('This is a process.nextTick callback 2');
    process.nextTick(() => {
        console.log('This is a process.nextTick inside process.nextTick ');
    })
})
process.nextTick(() => {
    console.log('This is a process.nextTick callback 3');
})

Promise.resolve().then(() => { console.log('This is a promise.resolve 1') })
Promise.resolve().then(() => {
    console.log('This is a promise.resolve 2')
    process.nextTick(() => { console.log('This is a process.nextTick inside promise.resolve  ') })
})
Promise.resolve().then(() => {
    console.log('This is a promise.resolve 3')
})