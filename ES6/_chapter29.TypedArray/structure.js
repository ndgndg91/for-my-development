let itemObj = {code: 'book', desc: '자바스크립트', qty : 10, price : 20, amount: 200};

let bufferObj = new ArrayBuffer(40);//40바이트
let codeObj = new Uint8Array(bufferObj, 0, 10);

for (let i = 0; i < itemObj.code.length; i++) {
  codeObj.set([itemObj.code.charCodeAt(i)], i);
}

let descObj = new Uint16Array(bufferObj, 10, 10);
for (let i = 0; i < itemObj.desc.length; i++) {
  descObj.set([itemObj.desc.charCodeAt(i)], i);
}

let qtyObj = new Uint16Array(bufferObj, 30, 1);
qtyObj.set([itemObj.qty]);

let priceObj = new Uint16Array(bufferObj, 32, 1)
priceObj.set([itemObj.price]);

let amoutObj = new Uint32Array(bufferObj, 36, 1)
amoutObj.set([itemObj.amount]);

console.log(bufferObj);


let result = [];
for (let i = 0; i < itemObj.code.length; i++) {
  result.push(String.fromCharCode(codeObj[i]));
}
console.log(result.join(''));

result = [];
for (let i = 0; i < itemObj.desc.length; i++) {
  result.push(String.fromCharCode(descObj[i]));
}
console.log(result.join(''));

console.log(qtyObj[0]);
console.log(priceObj[0]);
console.log(amoutObj[0]);
