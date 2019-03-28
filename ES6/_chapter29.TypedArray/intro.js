//TypedArray는 ArrayBuffer의 데이터를 Array-like 형태로 View하기 위한 오브젝트이다.
//TypedArray 오브젝트에 데이터가 저장되지 않고 ArrayBuffer 오브젝트에 저장된다.

//1비트는 0 과 1로 구성
//8비트는 1바이트
//unsigned 와 signed

//signed -128 ~ 127
// 8 7 6 5 4 3 2 1
// 1 1 1 1 1 1 1 1 = -128

//8비트에서 8번째 비트 즉 가장왼쪽의 비트가 unsigned와 signed를 결정짓는다
//1이면 음수 0이면 양수

//unsigned 0 ~ 255
//8 7 6 5 4 3 2 1
//1 1 1 1 1 1 1 1 = 255


let int16Obj = new Int16Array(3); //16비트 즉 2바이트를 저장하는 공간 3개를 가지는 TypedArray
console.log("1:",int16Obj);

int16Obj[0] = 123;
int16Obj[1] = 456;
console.log("2:",int16Obj);

console.log("3:",int16Obj[0]);
console.log("4:",new Int16Array());

// 1: Int16Array(3) [0, 0, 0]
// VM50:6 2: Int16Array(3) [123, 456, 0]
// VM50:8 3: 123
// VM50:9
