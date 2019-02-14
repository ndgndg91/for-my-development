console.log(Symbol.for("sports"));
console.log(Symbol.for("sports"));

console.log(Symbol.for("ABC") === Symbol.for("ABC"));
console.log(Symbol.for("DEF") === Symbol.for("DEF"));
console.log(Symbol.for(true));

//두개의 스코프에 Symbol을 저장 가능하다.
//Symbol()은 Symbol을 생성한 스코프에 Symbol값이 설정된다.
//Symbol.for() 는 글로벌 Symbol 레지스트리에 {key:value} 형태로 저장된다.
//지정한 문자열이 key가 되고 생성한 Symbol 값이 value가 된다.
