const newMap = new Map([
  ["key1","value1"],
  [{},"오브젝트"]
]);

console.log(newMap.size);

newMap.clear();
console.log(newMap.size);


// VM1592:6 2
// VM1592:9 0
