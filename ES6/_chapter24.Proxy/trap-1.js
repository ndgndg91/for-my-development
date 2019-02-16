let target = {food: '밥'};
let handler = {
  get(target, key){
    return target[key] + ",수저";
  },
  set(target, key){

  }
};

let midde = new Proxy(target, handler);
let left = midde.food;
console.log(left);//밥, 수저


//트랩이 작성된 오브젝트를 핸들러 오브젝트라고 하며 줄여서 핸들러라고 한다.
//get()과 set()이 작성된 오브젝트를 handler로 변수에 할당하므로 handler는 핸들러 오브젝트이다.

//트랩은 오퍼레이팅 시스템(Operation System)에서 사용하는 용어로 실행 중인 프로그램에 이상이 발생했을 때 프로그램을 중단하고
//사전에 정의된 제어로 이동하는 동작을 의미한다.


//Proxy Handler Methods
// [[Call]]()              apply()
// [[Construct]]()         construct()
// [[DefineOwnProperty]]() defineProperty()
// [[Delete]]()            deleteProperty()
// [[Get]]()               get()
// [[GetOwnProperty]]()    getOwnPropertyDescriptor()
// [[GetPrototypeOf]]()    getPrototypeOf()
// [[HasProperty]]()       has()
// [[IsExtensible]]()      isExtensible()
// [[OwnPropertyKeys]]()   ownKeys()
// [[PreventExtensions]]() preventExtensions()
// [[Set]]()               set()
// [[SetPrototypeOf]]()    setPrototypeOf()
