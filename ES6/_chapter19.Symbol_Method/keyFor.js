let symOne = Symbol.for("123");
console.log(Symbol.keyFor(symOne));//123

let symTwo = Symbol("222");
console.log(Symbol.keyFor(symTwo));//undefined


//keyFor() 글로벌 레지스트리에 있는 키값을 가져옴
