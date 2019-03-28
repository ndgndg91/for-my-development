let bufferObj = new ArrayBuffer(10);//10바이트
let oneObj = new Int16Array(bufferObj);//2바이트

console.log(oneObj.BYTES_PER_ELEMENT);//2
