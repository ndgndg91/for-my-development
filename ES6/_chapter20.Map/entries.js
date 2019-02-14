const newMap = new Map([
  ["key1","value1"],
  ["key2","value2"]
]);

let iteratorObj = newMap.entries();
let result = iteratorObj.next();
console.log(result);

console.log(iteratorObj.next());
console.log(iteratorObj.next());


//
// VM1205:8 {value: Array(2), done: false}done: falsevalue: (2) ["key1", "value1"]__proto__: Object
// VM1205:10 {value: Array(2), done: false}done: falsevalue: (2) ["key2", "value2"]__proto__: Object
// VM1205:11 {value: undefined, done: true}done: truevalue: undefined__proto__: Object
