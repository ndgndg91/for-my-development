const newMap = new Map();
newMap.set("one", 100);
console.log(newMap.size);

newMap.set({}, "오브젝트");
newMap.set(function(){}, "Function");
newMap.set(new Number("123"), "인스턴스");
newMap.set(NaN, "Not a Number");

for(let [key , value] of newMap){
  console.log(key, value);
}

// VM846:3  1
// VM846:11 one 100
// VM846:11 {} "오브젝트"
// VM846:11 ƒ (){} "Function"
// VM846:11 Number {123} "인스턴스"
// VM846:11 NaN "Not a Number"
