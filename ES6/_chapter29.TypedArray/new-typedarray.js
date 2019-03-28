let int16Obj = new Int16Array(3);//16비트 = 2바이트 엘리먼트를 3개 담을 수 있는 TypedArray
int16Obj[0] = 258;

console.log(new Int16Array(int16Obj));
console.log(new Int8Array(int16Obj));
// Int16Array(3) [258, 0, 0]
// VM120:5 Int8Array(3) [2, 0, 0]
//2바이트 -> 1바이트 데이터 손실

//new 연산자에 TypedArray를 파라미터로 넘기면 복사해준다.
