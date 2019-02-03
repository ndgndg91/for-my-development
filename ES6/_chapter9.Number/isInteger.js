console.log("1:", Number.isInteger(0));//true
console.log("2:", Number.isInteger(1.0));//true
console.log("3:", Number.isInteger(-123));//true

console.log("4:", Number.isInteger("12"));//false String
console.log("5:", Number.isInteger(1.02));//false 실수
console.log("6:", Number.isInteger(NaN));//false
console.log("7:", Number.isInteger(true));//false Boolean
