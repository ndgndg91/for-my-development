//Proxy 사전적 의미로 대리, 대신
//메서드의 기본적인 오퍼레이션과 행위를 중간에서 가로채어 이를 대신하는 일련의 처리를 의미한다.

//ex) 기본적인 예제와 프로세스
//1, 2, 3 밥
//위 순서대로 놓여져 있을 경우 1번 사람이 직접 3번 옆에 있는 밥을 가져올 수 있다.
//다른 방법으로는 1번이 2번에게 요청하여 3번 옆에 있는 밥을 받아오라고 요청할 수 있는데, 이때 2번이 Proxy이다.
let target = {food:'밥'};
let left = target.food;
console.log(left);


let target = {food:'밥'};
let middle = new Proxy(target, {});
let left = middle.food


//타깃(target)
//new Proxy(target)의 첫 번째 파라미터에 지정한 대상 오브젝트를 타깃이라고 한다.
