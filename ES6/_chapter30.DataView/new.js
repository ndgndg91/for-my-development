let bufferObj = new ArrayBuffer(12);//12바이트
let viewObj = new DataView(bufferObj);
console.log(viewObj);

console.log(viewObj.buffer);
console.log(viewObj.byteOffset);//0
console.log(viewObj.byteLength);//12

let bufferObj2 = new ArrayBuffer(12);
let viewObj2 = new DataView(bufferObj2, 1, 8);

console.log(viewObj2.byteOffset);//1
console.log(viewObj2.byteLength);//8
