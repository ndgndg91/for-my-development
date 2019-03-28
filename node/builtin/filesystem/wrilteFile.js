const fs = require('fs');

fs.writeFile('./txtfile/writeme.txt', 'ndgndg91 is Good', (err) => {
    if(err){
        throw err;
    }
    fs.readFile('./txtfile/writeme.txt', (err, data) => {
        if(err){
            throw err;
        }
        console.log(data);
        console.log(data.toString());
    });
});
