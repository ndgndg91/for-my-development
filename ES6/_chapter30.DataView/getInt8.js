let bufferObj = new ArrayBuffer(4);
let int8Obj = new Int8Array(bufferObj);
int8Obj.set([10,20,30]);

let viewObj = new DataView(bufferObj);
for (let i = 0; i < viewObj.byteLength; i++) {
  console.log(viewObj.getInt8(i));
}
//10
//20
//30
//0
