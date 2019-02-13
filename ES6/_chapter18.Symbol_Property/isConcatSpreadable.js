//프로퍼티에 false를 할당하면 one.concat(two)에서 two 배열을 펼치지 않고 그대로 one배열 끝에 첨부.
//true는 디폴트로 two 배열의 엘리먼트를 하나씩 분리하여 one 배열 끝에 첨부.
//true/false 에 따라 배열 length값이 달라짐.

//프로퍼티로만 사용 가능, 함수로는 불가능
//Array-like 오브젝트에서 사용 가능, 상속받을 클래스에 사용 불가능.

let one = [11,12], two = [21,22];
let result = one.concat(two);
console.log(result, result.length);

two[Symbol.isConcatSpreadable] = false;
result = one.concat(two);
console.log(result, result.length);

two[Symbol.isConcatSpreadable] = true;
result = one.concat(two);
console.log(result, result.length);
