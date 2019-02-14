let newMap = new Map([
  ["key1","value1"],
  ["2","ndgndg91"]
]);

let iteratorObj = newMap[Symbol.iterator]();

console.log(iteratorObj.next());
console.log(iteratorObj.next());


// VM1808:8 {value: Array(2), done: false}done: falsevalue: (2) ["key1", "value1"]__proto__: Object
// VM1808:9 {value: Array(2), done: false}done: falsevalue: (2) ["2", "ndgndg91"]__proto__: Object
