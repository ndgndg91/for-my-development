//1. Number 환경이면 "number"를 toPriitive(hint) 파라미터에 설정.
//2. String 환경이면 "string"을 toPriitive(hint) 파라미터에 설정.
//3. Number 와 String 환경이 아니면 "default" 를 toPriitive(hint) 파라미터에 설정.

let obj = {
  [Symbol.toPrimitive](hint){
    if(hint === "number"){
      return 30;
    };
    if(hint === "string"){
      return "문자열";
    };
    return "디폴트";
  }
};

console.log("1:", 20 + obj);
console.log("2:", 20 * obj);

console.log("3:", obj + 50);
console.log("4:", +obj + 50);

console.log("5:", `${obj}` + 123);
