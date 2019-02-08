function* gen(){
  yield* [10, 20];
}

let genObj = gen();


console.log(genObj.next());//10 false
console.log(genObj.next());//20 false
console.log(genObj.next(77));//undefined true

//yield*와 같이 yield에 이어 *을 작성하고 표현식(expression)에 이터러블 오브젝트를 작성한다.
//next()를 호출할 때마다 이터러블 오브젝트를 하나씩 실행하며, 결과 값을 yield의 반환 값으로 사용.

//표현식에 제너레이터 함수를 작성할 수 있다.
//표현식으로 호출된 함수에 다수가 yield가 있으면 호출된 함수의 yield를 전부 처리한 후 yield* 아래에 작성한 코드를 실행한다.
