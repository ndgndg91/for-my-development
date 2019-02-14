let result = JSON.stringify({[Symbol("one")] : "1"});
console.log(result);//{}
console.log(typeof result);//string

console.log(JSON.stringify({[Symbol.for("two")] : "2"}));//{}

//Symbol-keyed 프로퍼티로 작성한 Symbol이 변환에서 제외된다.
