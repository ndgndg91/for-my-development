const newMap = new Map([
  ["key1","value1"]
]);

newMap.set({}, "오브젝트");

let iteratorObj = newMap.values();
console.log(iteratorObj.next());
console.log(iteratorObj.next());


// VM1423:8 {value: "value1", done: false}
// VM1423:9 {value: "오브젝트", done: false}
