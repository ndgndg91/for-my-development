const newMap = new Map();
newMap.set("one", 100);
newMap.set("one", 123);

let sportsObj = {sports : "스포츠"};
newMap.set(sportsObj, "Sports Object");
newMap.set(sportsObj, "Sports Object-변경");

newMap.set({}, "Obejct-1");
newMap.set({}, "Object-2");


//Map(4) {"one" => 123, {…} => "Sports Object-변경", {…} => "Obejct-1", {…} => "Object-2"}
// size: (...)
// __proto__: Map
// [[Entries]]: Array(4)
// 0: {"one" => 123}
// key: "one"
// value: 123
// 1: {Object => "Sports Object-변경"}
// key: {sports: "스포츠"}
// value: "Sports Object-변경"
// 2: {Object => "Obejct-1"}
// key: {}
// value: "Obejct-1"
// 3: {Object => "Object-2"}
// key: {}
// value: "Object-2"
// length: 4


//{} 다른 메모리 주소에 저장되기에 대체되지 않고 추가됨. 다르게 인식
