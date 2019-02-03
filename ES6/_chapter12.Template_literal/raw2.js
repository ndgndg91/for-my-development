let one = 1, two = 2;
let result = String.raw({raw : "ABCDE"}, one, two, 3);
console.log(result);//A1B2C3DE


//첫 번째 파라미터는 {raw : "문자열"} 형태여야만 한다.
//전개해서 하나씩 조합하여 새로운 문자열 반환.
