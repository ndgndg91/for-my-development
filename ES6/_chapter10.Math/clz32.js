//32비트 값에서 0비트 수를 반환.
//왼쪽 부터 비트 값 1을 만날 때 까지 0 값의 비트 수를 반환.

console.log("1:", Math.clz32(1)); //31
console.log("2:", Math.clz32(2)); //30
console.log("3:", Math.clz32()); //32
console.log("4:", Math.clz32(2.5)); //30 소수점은 무시된다.
console.log("5:", Math.clz32(true)); //31 true == 1
