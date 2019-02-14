const newMap = new Map();
newMap.set("one", 100);
console.log(newMap.get("one"));
console.log(newMap.get("two"));

let sportsObj = {sports : "스포츠"};
newMap.set(sportsObj, "Sports Object");
console.log(newMap.get(sportsObj));



//
// VM998:3 100
// VM998:4 undefined
// VM998:8 Sports Object
