try {
  new Map(["one", 1]);
} catch (e) {
  console.log("[one, 1]");
} finally {

}

try {
  new Map({one : 1});
} catch (e) {
  console.log("{one: 1}");
} finally {

}

let newMap = new Map([{one : 1}]);
console.log(newMap);//Map(1) {undefined => undefined}
