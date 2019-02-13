//Symbol.species는 static 액세서 프로퍼티로 getter만 있고, setter는 없다.
//Array, Set, Promise, RegExp, ArrayBuffer, TypedArray 오브젝트에 Symbol.species 가 빌트인으로 포함되어 있다.

//위의 오브젝트를 상속받는 클래스에 Symbol.species를 작성하면 오버라이드가 된다.
//따라서 다른 오브젝트를 반환할 수 있다.

class ExtendArray extends Array{
  static get [Symbol.species](){
    return Array;
  }
};

let oneInstance = new ExtendArray(1,2,3);

let twoInstance = oneInstance.slice(1,2);
console.log(oneInstance instanceof ExtendArray);//true

console.log(twoInstance instanceof Array);//true
console.log(twoInstance instanceof ExtendArray);//false
