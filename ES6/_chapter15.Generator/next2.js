let gen = function*(value){
  return ++value;
}

let genObj = gen(1);
console.log(genObj.next());
//done은 return문을 만나면 true
