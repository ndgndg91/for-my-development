//1. yield 를 수행하면 표현식 평가 결과가 value 값에 설정되고, yield 를 수행하지 못하면 undefined가 설정된다.
//2. yield 를 수행하면 done 값에 false가 설정되고, yield를 수행하지 못하면 true가 설정된다.
//3. 제너레이터 함수의 모든 yield 수행을 완료했는데, 다시 next() 함수를 호출하면 수행할 yield가 없으므로 value 값에 undefined가 설정되고 done 값에 true가 설정된다.

function* sports(one){
  let two = yield one;
  let param = yield two + one;
  yield param + one;
}

let generationObj = sports(10);

console.log(generationObj.next());
console.log(generationObj.next());
console.log(generationObj.next(20));
