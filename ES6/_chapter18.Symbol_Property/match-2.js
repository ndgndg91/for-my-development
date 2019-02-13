try {
  "ABC".includes(/ABC/);
} catch (e) {
  console.log("정규 표현식 작성 불가");
} finally {

}

let regexpObj = /ABC/;
regexpObj[Symbol.match] = false;// regexpObj를 정규식이 아닌 문자열로 인식
console.log("/ABC/".includes(regexpObj));
