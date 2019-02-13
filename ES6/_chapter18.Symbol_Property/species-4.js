//Symbol.species를 통해 아예 다른클래스를 반환하는 예제

class ExtendOne extends Array {
  showOne(){
    console.log("ExtendOne");
  }
};

class ExtendTwo extends Array{
  static get[Symbol.species](){
    return ExtendOne;
  }
  showTwo(){
    console.log("ExtendTwo");
  }
};

let twoInst = new ExtendTwo(10,20,30);
let threeInst = twoInst.filter((value) => {value > 10});
console.log(threeInst);

threeInst.showOne();
console.log(threeInst.showTwo);//undefined
console.log(threeInst instanceof ExtendOne);//true
console.log(threeInst instanceof ExtendTwo);//false
