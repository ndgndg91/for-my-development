const fs = require('fs');

fs.copyFile('./txtfile/readme4.txt', './txtfile/writeme4.txt', (err) => {
    if(err){
        throw err;
    }
    console.log('복사 완료');
});