let bufferObj = new ArrayBuffer(10);//10바이트
let oneObj = new Int16Array(bufferObj, 4);//5~10바이트 사용 10 - 4 = 6 바이트 사용

console.log(oneObj.length);//3
console.log(oneObj.byteLength);//6

console.log(oneObj.buffer);
console.log(oneObj.buffer.byteLength);//10
