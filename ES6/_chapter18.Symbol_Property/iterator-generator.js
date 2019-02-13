//대괄호 [] 안에 spread 연산자로 obj 오브젝트를 작성했다.
//[...obj]를 시작하게 되면 우선 obj 오브젝트에서 [Symbol.iterator] 작성 여부를 체크한다.
//작성되어 있으면 [Symbol.iterator]()가 호출되며 이터레이터 오브젝트를 생성한다.

let obj = {};
obj[Symbol.iterator] = function*(){
  yield 10;
  yield 20;
  yield 30;
}

let result = [...obj];
console.log(result);

let result2 = obj[Symbol.iterator]();
console.log(result2.next());
console.log(result2.next());
console.log(result2.next());
console.log(result2.next());
