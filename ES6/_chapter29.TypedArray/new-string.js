let oneObj = new Int16Array("123");//16비트 = 2바이트의 엘리먼트 123개를 담을 수 있는 TypedArray
console.log("1:", oneObj.length);//123

let twoObj = new Int16Array("ABC");
console.log("2:", twoObj.length);//0
