let gen = function*(){
  throw '에러 발생';
  yield 20;
};

let genObj = gen();

try {
  let result = genObj.next();
} catch (err) {
  console.log(err);//'에러 발생'
}

console.log(genObj.next());//undefined true     ===> 제너레이터 함수에서 에러가 발생하면 종료 된다.
