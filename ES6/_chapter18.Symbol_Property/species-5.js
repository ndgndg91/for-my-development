class ExtendOne extends Array{
  static get[Symbol.species](){
    return null;
  }
};

let oneInst = new ExtendOne(10,20,30);
let arrayInst = oneInst.filter((value) => { value > 10});

console.log(arrayInst instanceof Array);//true
console.log(arrayInst instanceof ExtendOne);//false


//상속받은 클래스에서 Symbol.species null을 리턴하면 부모 클래스의 Symbol.species를 반환한다.
