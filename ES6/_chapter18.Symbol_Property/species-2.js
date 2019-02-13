class ExtendArray extends Array{
  getValue(){}
}

let newArray = new ExtendArray(1,2,3);

let newInst = newArray.slice(1,2);
console.log(newInst instanceof ExtendArray);

//인스턴스의 메서드를 호출했을 때 인스턴스를 반환하도록 하는 것이 Symbol.species이다.
