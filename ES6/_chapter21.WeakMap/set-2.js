const newWeakMap = new WeakMap();
let sportsObj = {};
newWeakMap.set(sportsObj, "Object-1");

sportsObj = {};
newWeakMap.set(sportsObj, "Object-2");

setTimeout(function(){
  console.log(newWeakMap);
},1000);

//WeakMap {{…} => "Object-2"}

//GC로 인해 첫번째 sportsObj는 메모리에서 삭제됨.
