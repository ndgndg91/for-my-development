//"use strict";
let sports = {soccer : "축구", baseball : "야구"};
with(sports){
  console.log(soccer, baseball);
};
sports[Symbol.unscopables] = {baseball: true};
try {
  with(sports){
    console.log(soccer);
    let value = baseball;
  }
} catch (e) {
  console.log(e.message);
} finally {

}

//with 문에서 사용하면 값이 true이면 프로퍼티를 전개하지 않는다.
//Symbol.unscopables 값이 true일 때, with 문에서 프로퍼티를 전개하지 않으므로 Object 오브젝트의 프로퍼티 키를 사용하면 에러 발생.
