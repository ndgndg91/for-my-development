const SPORTS = "축구";
try {
  SPORTS = "농구";
} catch (e) {
   console.log("const 재할당 불가");
} finally {

}

const obj = {language : "한글"};
try {
  obj = {};
} catch (e) {
  console.log("const 재할당 불가");
} finally {
  obj.language = "영어";
  console.log(obj.language);
}
