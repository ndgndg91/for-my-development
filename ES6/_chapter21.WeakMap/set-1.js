const newWeakMap = new WeakMap();
(function(){
  var obj = {item : "weakmap"};
  newWeakMap.set(obj, "GC");
}());

const newMap = new Map();
(function(){
  var obj = {item : "map"};
  newMap.set(obj, "Keep");
}());

setTimeout(function(){
  console.log("1:", newWeakMap);
  console.log("2:", newMap);
},1000)

//1: WeakMap 
//2: Map(1) {{…} => "Keep"}

//GC의 영향으로 일시적으로 사용한 오브젝트는 메모리에서 사라진다.
