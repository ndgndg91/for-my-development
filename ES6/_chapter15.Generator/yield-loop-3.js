let gen = function*(value){
  yield value;
  yield* gen(value + 10);// 재귀 호출 형태
};

let genObj = gen(1);

console.log(genObj.next());//1 false
console.log(genObj.next());//2 false
console.log(genObj.next());//3 false


//genObj.return() 호출 전까지는 계속 next()호출 가능
