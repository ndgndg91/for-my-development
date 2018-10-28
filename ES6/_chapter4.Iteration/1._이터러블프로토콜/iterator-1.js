let arrayObj = [];
let result = arrayObj[Symbol.iterator];
console.log(result);
//ƒ values() { [native code] }

let objectObj = {};
let result2 = objectObj[Symbol.iterator];
console.log(result2);
//undefined


//Array 오브젝트가 할당된 arrayObj에서 Symbol.iterator의 존재 여부를 체크하는 코드이다.
//오브젝트에 프로퍼티 존재 여부를 체크할 때 arrayObj.propertyKey 또는 arrayObj[propertyKey] 형태로 작성하는데,
//Symbol은 arrayObj.Symbol.iterator 형태로 작성할 수 없고 arrayObj[Symbol.iterator]와 같이 대괄호 [] 안에 Symbol.iterator를 작성해야 한다.
