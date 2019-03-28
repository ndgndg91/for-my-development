//new TypedArray(ArrayBuffer)

let bufferObj = new ArrayBuffer(32);//32바이트

let oneObj = new Int16Array(bufferObj);//2바이트
console.log(oneObj.length);//16
console.log(oneObj.byteLength);//32

let twoObj = new Int32Array(bufferObj);//4바이트
console.log(twoObj.length);//8

console.log("=============절취선==============");

let bufferObj2 = new ArrayBuffer(10);
let oneObj2 = new Int16Array(bufferObj2, 4);//두 번째 파라미터 4는 offset으로 4~10 바이트 영역을 사용하겠다.

console.log(oneObj2.byteLength); // 10
console.log(oneObj2.length); // 3         6 / 2 = 3

oneObj2[1] = 22;
console.log(oneObj2);//[0, 22, 0]

console.log("=============절취선==============");

let bufferObj3 = new ArrayBuffer(10);
let oneObj3 = new Int16Array(bufferObj3, 4, 2);//4바이트 부터 2 * 2 = 4 바이트를 쓰겠다. 4 ~ 8바이트

oneObj3[0] = 22;
console.log(oneObj3);//Int16Array(2) [22, 0]

let twoObj3 = new Int16Array(bufferObj3);
console.log(twoObj3);//Int16Array(5) [0, 0, 22, 0, 0]

console.log("=============절취선==============");

let bufferObj4 = new ArrayBuffer(1);//1바이트

let int8Obj = new Int8Array(bufferObj4);
[127, 128, 129].forEach(function(value){
  int8Obj[0] = value;
  console.log(value, ":", int8Obj[0]);
});
//signed int8의 범위는 -128 ~ 127
// 127 ":" 127
// 128 ":" -128
// 129 ":" -127

console.log("=============절취선==============");

let bufferObj5 = new ArrayBuffer(1);

let uint8Obj = new Uint8Array(bufferObj5);
[255,256,257].forEach(function(value){
  uint8Obj[0] = value;
  console.log(value, " : ", uint8Obj[0]);
});
//unsigned int8의 범위는 0 ~ 255
// 255 " : " 255
// 256 " : " 0
// 257 " : " 1

console.log("=============절취선==============");

let bufferObj6 = new ArrayBuffer(1);

let clampedObj = new Uint8ClampedArray(bufferObj6);
[255, 256, 257].forEach(function(value){
  clampedObj[0] = value;
  console.log(value , ":", clampedObj[0]);
});
//값의 범위를 넘어도 최대값을 유지한다.
// 255 " : " 255
// 256 " : " 255
// 257 " : " 255

console.log("=============절취선==============");

let bufferObj7 = new ArrayBuffer(8);//8바이트
let float64Obj = new Float64Array(bufferObj7);// 64비트 = 8바이트      => 모든값을 저장가능하다.

bufferObj7[0] = Number.MAX_VALUE;
console.log(bufferObj7[0] == Number.MAX_VALUE);//true
