let sym = Symbol();
try {
  +sym;
} catch (e) {
  console.log("+sym 사용불가");
} finally {

};

try {
  sym | 0;
} catch (e) {
  console.log("sym | 0 사용불가");
} finally {

}
