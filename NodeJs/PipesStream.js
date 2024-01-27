const fs = require('node:fs');
const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf-8',
    //highWaterMark
})
const writableStream = fs.createWriteStream('./file2.txt')
readableStream.pipe(writableStream)