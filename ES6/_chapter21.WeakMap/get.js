const newWeakMap = new WeakMap();
let obj = {};
newWeakMap.set(obj, "오브젝트");

console.log(newWeakMap.get(obj));
//오브젝트
