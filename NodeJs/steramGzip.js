const fs = require('node:fs');
const zlib = require('node:zlib');
const gzip = zlib.createGzip();
const readableStream = fs.createReadStream('./file.txt', { encoding: 'utf-8' })
readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))
const writeStream = fs.createReadStream('./file2.txt');
readableStream.pipe(writeStream);