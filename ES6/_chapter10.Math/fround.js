//64비트 유동소수 값을 32비트 유동 소수 값으로 변환하여 반환.

let value = 0.1 + 0.2;
console.log("1:", value);//0.30000000000000004
console.log("2:", Math.fround(value));//0.30000001192092896

console.log("3:", 1.23);//1.23
console.log("4:", Math.fround(1.23));//1.2300000190734863
