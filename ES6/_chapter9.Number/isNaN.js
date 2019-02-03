console.log("1:", Number.isNaN(NaN) , isNaN(NaN));// true , true
console.log("2:", Number.isNaN("NaN") , isNaN("NaN"));// false , true
console.log("3:", Number.isNaN("ABC"), isNaN("ABC"));// false, true

console.log("4:", Number.isNaN(undefined) , isNaN(undefined));//false , true
console.log("5:", Number.isNaN({}), isNaN({}));// false , true
console.log("6:", Number.isNaN(Number.NaN) , isNaN(Number.isNaN));// true , true

console.log("7:", Number.isNaN(0 / 0) , isNaN( 0 / 0));// true , true
console.log("8:", Number.isNaN(true) , isNaN(true));// false , false    ===> Number(true) === 1
console.log("9:", Number.isNaN(null) , isNaN(null));// false , false    ===> Number(null) === 0
console.log("10:", Number.isNaN(""), isNaN(""));// false , falset       ===> Number("") === 0


//Number.isNaN 은 먼저 Number 오브젝트인지 검사하고 Number 오브젝트가 아니라면 false 반환.
//Number 오브젝트이면, NaN 인지 판별.

//global isNaN은 매개변수를 강제 Number 오브젝트로 변환하고 나서 NaN 인지 판별.
