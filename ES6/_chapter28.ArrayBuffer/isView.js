//체크 대상이 TypedArray 또는 Dataview 오브젝트이면 true 아니면 false
let bufferObj = new ArrayBuffer(10);
console.log(ArrayBuffer.isView(bufferObj));//false

let typeObj = new Int16Array();
console.log(ArrayBuffer.isView(typeObj));//true

let viewObj = new DataView(bufferObj);
console.log(ArrayBuffer.isView(viewObj));//true
