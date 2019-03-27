// 자바스크립트는 기본적으로 동기(Synchronous)로 실행한다.
// 반면, Promise는 비동기(Asynchronous)로 실행한다.
// Promise 오브젝트에서 비동기 처리 방법을 제공한다.


function create(){
  return new Promise(function(resolve, reject){
    resolve();
    console.log("1: resolve");
  });
};

create().then(function(){
  console.log("3: 성공");
}, function(){
  console.log("3: 실패");
});

console.log("2: 끝");

// [Log] 1: resolve
// [Log] 2: 끝
// [Log] 3: 성공

// Promise 상태
// Promise는 코드를 실행할 때마다 진행 상태를 [[PromiseState]]에 저장한다. 상태를 저장하는 이유는 연속해서 코드를 실행하지 않고, 소스 코드 끝까지 내려갔다
// 다시 올라와서 실행하므로 진행 상태가 필요하다.

// 크게 두가지로 나뉜다.
// pendding, settled 이다.

// pendding 상태에서는 위 코드와 같이 우선 new Promise()로 인스턴스를 생성한다.
// 그리고 executer(Promise 인스턴스 생성시 인자 함수)를 실행하여 성공과 실패에 따라 호출할 핸들러 함수를 바인딩(.then( , ))한다.


// settled 상태에서 처리의 성공과 실패를 알 수 있다.
// fulfill, reject 상태로 구분되는데, 상태에 따라 pendding 상태에서 바인딩한 핸들러 함수가 호출된다. 
