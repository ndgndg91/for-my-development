const newMap = new Map([
  ["key1", "value1"],
  [{},"오브젝트"]
]);

let sportsObj = {};
newMap.set(sportsObj ,"추가");

console.log(newMap.delete("key1"));
console.log(newMap.delete({}));
console.log(newMap.delete(sportsObj));


// VM1500:9 true
// VM1500:10 false
// VM1500:11 true
// undefined
// newMap
// Map(1) {{…} => "오브젝트"}
