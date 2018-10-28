let arrayObj = [1,2,3];
let iteratorObj = arrayObj[Symbol.iterator]();
console.log("1 : ", typeof iteratorObj);

console.log("2 : ", iteratorObj.next());
console.log("3 : ", iteratorObj.next());
console.log("4 : ", iteratorObj.next());
console.log("5 : ", iteratorObj.next());

//이터레이터 프로토콜은 오브젝트의 값을 차례대로 처리할 수 있는 방법을 제공한다.
//이 방법은 오브젝트에 있는 next() 메서드로 구현한다.
//따라서 오브젝트에 next()메서드가 있으면 이터레이터 프로토콜이 적용된 것이다.


//자바스크립트에서 [key:value] 형태의 Object는 작성한 순서대로 열거되는 것을 보장하지 않는다.
//이는 Object 오브젝트에 next()가 없다는 의미이기도 하다.
//ES6에서 Object 오브젝트에 추가한 순서대로 key,value가 열거되는 Map 오브젝트를 제공한다.
