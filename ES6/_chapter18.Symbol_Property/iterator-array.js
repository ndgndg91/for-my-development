//Symbol.iterator는 String, Array, Map, Set, TypedArray 오브젝트의 prototype에 연결되어 있다.
//오브젝트의 [Symbol.iterator]를 호출하면 이터레이터 오브젝트를 생성하여 반환한다.
let numberArray = [10, 20];
for(let value of numberArray){
  console.log(value);
}

let iteratorObj = numberArray[Symbol.iterator]();
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
