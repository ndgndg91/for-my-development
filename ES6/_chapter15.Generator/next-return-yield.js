let gen = function*(){
  return yield yield yield;
}
let genObj = gen();

console.log(genObj.next());//undefined false  첫 번째 yield
console.log(genObj.next(10));//10 false       두 번째 yield
console.log(genObj.next(20));//20 false       세 번째 yield
console.log(genObj.next(30));//30 true        return;
