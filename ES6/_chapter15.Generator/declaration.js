function* sports(one, two){ //제너레이터 선언문
  console.log("함수 블록");
  yield one + two;
};

console.log(typeof sports); //function

let genObj = sports(1,2); // 제너레이터 오브젝트 , 이터레이터 오브젝트  함수 블록은 실행되지 않음
console.log(typeof genObj);
