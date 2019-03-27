let obj = {};
console.log(Reflect.preventExtensions(obj));//true
console.log(Reflect.defineProperty(obj, 'name', {value:'남동길'}));//false

//target 오브젝트에 프로퍼티 추가 금지를 설정한다.
