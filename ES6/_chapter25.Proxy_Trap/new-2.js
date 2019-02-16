let json = JSON;
console.log(json);

try {
  let proxyObj = Proxy();
} catch (e) {
  console.log("new 사용");
  console.log(e);
} finally {

}

//
// VM242:2 JSON {parse: ƒ, stringify: ƒ, Symbol(Symbol.toStringTag): "JSON"}
  // parse: ƒ parse()
  // stringify: ƒ stringify()
  // Symbol(Symbol.toStringTag): "JSON"
  // __proto__: Object
// VM242:7 new 사용
// VM242:8 TypeError: Constructor Proxy requires 'new'
    // at <anonymous>:5:18

//JSON 오브젝트도 constructor가 없어서 new 연산자로 인스턴스를 생성할 수 없다.
//Proxy 오브젝트도 constructor가 없지만 new 연산자로 인스턴스를 생성할 수 있다. 그래서 특별한 오브젝트이다.
