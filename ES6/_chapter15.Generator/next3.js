let gen = function*(param){
  let one = param + 1;
  yield one;
  var two = 2;
  yield one + two;
};

let genObj = gen(10);

console.log(genObj.next());//[Log] {value: 11, done: false}
console.log(genObj.next());//[Log] {value: 13, done: false}
//제네레이터 함수는 변수에 설정된 값을 유지한다.
