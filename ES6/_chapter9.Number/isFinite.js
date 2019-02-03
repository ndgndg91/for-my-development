console.log("1:", Number.isFinite(Infinity), isFinite(Infinity));//false false
console.log("2:", Number.isFinite(-Infinity), isFinite(-Infinity));//false false
console.log("3:", Number.isFinite(0), isFinite(0));//true true

console.log("4:", Number.isFinite(null), isFinite(null));//false true ===> Number(null) === 0
console.log("5:", Number.isFinite(NaN), isFinite(NaN));//false false
console.log("6:", Number.isFinite(undefined), isFinite(undefined));//false false
console.log("7:", Number.isFinite(true), isFinite(true));//false true ===> Number(true) === 1


//Number.isFinite() 는 먼저 Number 오브젝인지 확인한다. 아니라면 false 리턴
//Number 오브젝트라면 유한한지 검사한다.

//global isFinite() 는 매개변수를 Number() 오브젝트로 변환 후 유한한지 검사한다.
