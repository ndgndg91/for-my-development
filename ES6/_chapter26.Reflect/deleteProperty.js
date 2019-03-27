let backsoo = {name:'남동길', age:29};
console.log(Reflect.deleteProperty(backsoo, 'age'));//true
console.log(Reflect.deleteProperty(backsoo, 'age'));//true

Object.freeze(backsoo);//삭제할 수 없는 상태로 설정ㅇconsole.log(backsoo);
console.log(Reflect.deleteProperty(backsoo, 'name'));//false
