let oneObj = new Int16Array([12, 34, 56]);
console.log("1:", oneObj.length);//3    Array 오브젝트 가능

let twoObj = new Int16Array({0: 12, 1: 34});
console.log("2:", twoObj.length);//0    그냥 오브젝트 ... 

let threeObj = new Int16Array({0:12, 1:34, length:2});
console.log("3:", threeObj.length);//2    Array-like 오브젝트는 가능
