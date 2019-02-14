const newMap = new Map();
newMap.set({}, "Object");
console.log(newMap.get({}));

newMap.set(123, "값 123");
console.log(newMap.get(123));
console.log(newMap.get("123"));

newMap.set(NaN, "Not a Number");
console.log(newMap.get(NaN));


//VM1063:3 undefined    --> 2라인의 {} 3라인의 {} 메모리 주소가 다르기때문에
// VM1063:6 값 123
// VM1063:7 undefined   --> number 타입으로 가져올 수 있다.
// VM1063:10 Not a Number
