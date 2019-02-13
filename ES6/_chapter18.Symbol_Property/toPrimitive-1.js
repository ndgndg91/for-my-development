//연산 대상이 모두 Number 타입이면 가감승제를 하면 된다. 하지만, 이외의 타입은 엔진의 toPriitive모듈을 기준으로 값읇 변환한다.
//1 + true == 2
//"1" + true == "1true"


//이러한 기준을 Symbol.toPriitive()로 오버라이드하여 엔진의 변환 기준을 변경 가능하다.

console.log("1:", 1+ undefined);//NaN
console.log("2:", 1+ null);//1

console.log("3:", "1" + undefined);//1undefined
console.log("4:", "1" + null);//1null

let obj = {};
console.log("5:", 123+obj);
console.log("6:", "123"+obj);
