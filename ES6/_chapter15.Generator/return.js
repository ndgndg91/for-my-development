let gen = function*(start){
  let count = start;
  while(true){
    yield ++count;
  }
}

let genObj = gen(10);

console.log(genObj.next()); // 11 false
console.log(genObj.return(77));// 77 true   ===> 제너레이트 오브젝트 종료
console.log(genObj.next(55));//undefined true
