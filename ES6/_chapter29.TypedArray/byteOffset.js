let bufferObj = new ArrayBuffer(10);
let oneObj = new Int16Array(bufferObj, 4);

console.log(oneObj.byteOffset);//4
