let backsooObj = { name : '남동길', hasJob : false};
let result = Reflect.getOwnPropertyDescriptor(backsooObj, 'hasJob');
console.log(result);//{value: false, writable: true, enumerable: true, configurable: true}
let result2 = Reflect.getOwnPropertyDescriptor(backsooObj, 'age');
console.log(result2);//undefined
