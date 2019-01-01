let sameKey = { one : 1, one :2 }
console.log(sameKey);
//es5 strict mode 에서는 에러가 발생
//es6 strict mode 에 관계없이 나중에 작성된 프로퍼티 값으로 대체.

let one = 1, two = 2;
let values = {one, two};
console.log(values);
//변수 이름을 사용하여 프로퍼티 값을 설정할 수 있다.


let objES5 ={
  getTotal : function(param){
    return param + 123;
  }
};
console.log(objES5.getTotal(200));

let objES6 = {
  getTotal(param){
    return param + 123;
  }
};

console.log(objES6.getTotal(400));
//523


//디스크립터
Object.defineProperty({}, 'book',{
  value : 123, // 프로퍼티 값으로 사용
  enumerable : true, // true : for-in 으로 열거 가능, false : for-in 으로 열거 불가능
  writable : true, // true : 속성 값 변경 가능, false : 속성 값 변경 불가능
  configurable : true // true : 프로퍼티 삭제 가능, false : 프로퍼티 삭제 불가능
});
