const fs = require('fs');

const writeSteam = fs.createWriteStream('./txtfile/writeme2.txt');
writeSteam.on('finish', () => {
    console.log('file write 완료');
});

writeSteam.write('이 글을 씁니다.\n');
writeSteam.write('한 번 더~ 쓴당');
writeSteam.end();