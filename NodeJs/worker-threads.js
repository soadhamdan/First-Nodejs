const { parentPort } = require('node:worker_threads');
let j = 0;
for (i = 0; i <= 600000000; i++) {
    j++;
}
parentPort.postMessage(j);