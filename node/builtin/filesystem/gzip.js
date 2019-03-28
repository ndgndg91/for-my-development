const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./txtfile/readme4.txt');
const zliStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./txtfile/readme4.txt.gz');
readStream.pipe(zliStream).pipe(writeStream);