let target = "123가나다";

console.log("1:", target.endsWith("가나다"));//true
console.log("2:", target.endsWith("가나"));//false
console.log("3:", target.endsWith("가나",5));//true 5는 123가나 에서만 검사
