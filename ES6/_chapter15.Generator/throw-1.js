let gen = function*(){
  try{
    yield 10;
  } catch (message){
    yield message;
  }
  yield 20;
}

let genObj = gen();

console.log(genObj.next());// 10 false
console.log(genObj.throw('에러 발생'));// '에러 발생' false
console.log(genObj.next());// 20 false
