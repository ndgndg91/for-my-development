let plusGen = function*(value){
  yield value + 5; // 1: 10 + 5 = 15
  yield value + 10; // 2: 10 + 10 = 20
};

let gen = function*(value){
  yield* plusGen(value);
  yield value + 20;// 3: 10 + 20 = 30
};

let genObj = gen(10);

console.log("1:", genObj.next());//15 false
console.log("2:", genObj.next());//20 false
console.log("3:", genObj.next());//30 false
console.log("4:", genObj.next());//undefined true
