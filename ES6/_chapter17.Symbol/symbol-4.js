let sym = Symbol("123");
try {
  `${sym}`;
} catch (e) {
  console.log("`${sym} 불가`");
} finally {

}
