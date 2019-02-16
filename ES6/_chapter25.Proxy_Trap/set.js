//set(target, key, value, receiver){} 형태이다.
//1. 첫 번째 파라미터에 target 오브젝트를 설정한다. new Proxy(target, {})의 target이 설정된다.
//2. 두 번째 파라미터에 프로퍼티 키를 설정한다.
//3. 세 번째 파라미터에 프로퍼티 값을 설정한다.
//4. 네 번째 파라미터에 일반적으로 set()이 포함된 Proxy 인스턴스가 설정된다. Proxy 인스턴스가 설정되지 않는 경우도 있다.


//트랩에서 지켜야 할 사항
//트랩의 처리 성공을 나타내려면 true를 반환, 실패를 나타내려면 false를 반환한다. strict mode에서 false를 반환하면 TypeError가 발생한다.
//target 오브젝트의 프로퍼티가 데이터 디스크립터일 때, [[Writable]]:false, [[Configurable]]: false이면 프로퍼티 값을 설정할 수 없다.
//target 오브젝트의 프로퍼티가 액세서 디스크립터일 때, [[Configurable]]:false이면 프로퍼티 값을 설정할 수 없다.

let target1 = {name: "남동길"};
let myProxy = new Proxy(target1, {});
myProxy.age = "29";


let target2 = {};
let foodProxy = new Proxy(target2, {
  set(target, key, value, receiver){
    console.log(target);
    console.log(key, value);
    target[key] = value;
    console.log(target);
    return true;
  }
});

foodProxy.food = "water";
console.log(foodProxy.food);
console.log(target2);


let target3 = {};
let loginProxy = new Proxy(target3, {
  set(target, key, value, receiver){
    target[key] = value;
    return true;
  }
});

loginProxy.code = 'ndgndg91';
console.log(loginProxy);
console.log(target3);
