let one = [11, 12];
let two = [21, 22];
let spreadObj = [51, ...one, 52, ...two];

console.log(spreadObj);
console.log(spreadObj.length);


//spread 연산자는 이터러블 오브젝트의 엘리먼트를 하나씩 분리하여 전개한다.
//전개한 결과를 변수에 할당하거나 호출하는 함수의 파라미터 값으로 사용할 수 있다.
