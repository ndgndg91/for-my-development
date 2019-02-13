const sym = Symbol(); // new  연산자를 사용할 수 없다.
console.log("1:", sym);
console.log("2:", typeof sym);
console.log("3:", Symbol('주석'));
console.log("4:", sym == Symbol());//false 유일한 값들 끼리는 같을 수가 없다.


//primitive
//ES5 에서는 string, number, boolean, null, undefined
//ES6 에서는 symbol 이 추가 되었다.

//Wrapper 오브젝트
//string -> String
//number -> Number
//boolean -> Boolean
//symbol -> Symbol

//Symbol()로 생성된 값은 프로그램 전체를 통해 유일하며 값을 변경할 수 없다.
//생성한 Symbol에 프로퍼티를 설정할 수 없으며 strict mode에서는 TypeError 발생.

//Symbol로 반환된 값이 오브젝트가 아니므로 오브젝트를 생성한다고 할 수 없다.
