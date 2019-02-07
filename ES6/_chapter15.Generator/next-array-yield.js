let gen = function*(){
  return [yield yield];
};

let genObj = gen();

console.log(genObj.next());//undefined false
console.log(genObj.next(10));//10 false
console.log(genObj.next(20));//[20] true
