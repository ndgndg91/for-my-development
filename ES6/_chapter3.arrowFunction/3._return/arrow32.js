let get = param => ({sports : '축구'});
let result = get();
console.log(result);

// 오브젝트를 return 할 때는 ()로 감싸줘야 한다.
// 그렇지 않을 경우에는 {}을 오브젝트가 아니고 블록으로 인식한다.

let practice = () => (1+5+10);
let result2 = practice();
console.log(result2);


let practice2 = () => { return {sex : 'Man'} };
let returnVal = practice2();
console.log(returnVal);
