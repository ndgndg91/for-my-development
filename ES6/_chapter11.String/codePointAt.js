//문자열에서 파라미터에 지정한 인덱스 번째 문자의 코드 포인트 값을 반환.
console.log("가".codePointAt(0));

let values = "ABC";

for(var value of values){
  console.log(value, value.codePointAt(0));
}
