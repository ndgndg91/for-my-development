let sym = Symbol();
try {
  sym + "문자열";
} catch (e) {
  console.log("문자열 연결 불가");
} finally {

}

console.log(String(sym) + "연결");//Symbol()연결
console.log(sym.toString() + "연결");//Symbol()연결
