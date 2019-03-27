let emptyObj = {};
Reflect.preventExtensions(emptyObj);
console.log(Reflect.isExtensible(emptyObj));//false

//target 오브젝트에 프로퍼티 추가 가능 여부를 반환

let emptyObj2 = {};
console.log(Reflect.isExtensible(emptyObj2));//true
