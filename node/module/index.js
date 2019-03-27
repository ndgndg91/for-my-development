const { odd, even } = require('./var');
const checkOddOrEven = require('./func');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}
console.log(checkOddOrEven);
console.log(checkStringOddOrEven('hello'));