let values = [ 10, 20 ,30];
Array.prototype.music = function(){
  return "음악";
};

Object.prototype.sports = function(){
  return "스포츠";
};

for(var key in values){
  console.log(key, values[key]);
};

console.log("<<for-of>>");
for(var value of values){
  console.log(value);
}


//for-of 문과 for-in 문 모두 반복하는 것은 같지만 차이가 있다.
//for-in 문의 대상은  Object 오브젝트이며 열거 가능한 프로퍼티가 대상이다.
//즉, 프로퍼티의 enumerable속성 값이 false이면 반복에서 제외 된다.
//for-of 문의 대상은 이터러블 오브젝트이며 prototype에 연결된 프로퍼티는 대상이 아니다.
