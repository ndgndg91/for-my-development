const newMap = new Map([
  ["key1", "value1"]
]);

newMap.set({}, "오브젝트");

let iteratorObj = newMap.keys();
console.log(iteratorObj.next());
console.log(iteratorObj.next());
// VM1277:8 {value: "key1", done: false}
// VM1277:9 {value: {…}, done: false}
