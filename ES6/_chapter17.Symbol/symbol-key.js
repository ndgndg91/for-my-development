let sym = Symbol("123");
let obj = {[sym] : "456"};
console.log(obj);

console.log(obj[sym]);//456
console.log(obj.sym);//undefined


//유일한 값을 갖는 Symbol 특성을 활용하여 Symbol 값을 오브젝트의 프로퍼티 키로 사용하면 키가 중복되지 않는다.
