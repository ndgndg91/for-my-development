console.log("1:", Number.isSafeInteger(7));
console.log("2:", Number.isSafeInteger(7.0));
console.log("3:", Number.isSafeInteger(Number.MAX_SAFE_INTEGER));

console.log("4:", Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
console.log("5:", Number.isSafeInteger(7.1));
console.log("6:", Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log("7:", Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));

//정수 값이면서 Number.MIN_SAFE_INTEGER ~ Number.MAX_SAFE_INTEGER 값이면 true 반환s
