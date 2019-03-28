const fs = require('fs');

const readStream = fs.createReadStream('./txtfile/readme4.txt');
const writeStream = fs.createWriteStream('./txtfile/writeme3.txt');
readStream.pipe(writeStream);