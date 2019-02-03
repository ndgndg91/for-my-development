//파라미터 값을 곱하고 결과를 32비트로 변환하여 반환.
//32비트 보다 큰 값은 잘리게 된다. 2의 32승은 4,294,967,296

//자바스크립트 연산은 64비트이지만 c++의 32비트와 호환성을 위해서라고 한다.

console.log("1:", Math.imul(2,4));
console.log("2:", Math.imul(-3, -4));

console.log("3:", Math.imul(123456, 1000));
console.log("4:", Math.imul(123456, 10000));
console.log("5:", Math.imul(123456, 100000)); //잘림
