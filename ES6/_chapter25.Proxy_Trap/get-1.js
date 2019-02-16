//1. 첫 번째 파라미터에 target 오브젝트 설정.
//2. 두 번째 파라미터에 프로퍼티 키를 설정.
//3. 세 번째 파라미터에 Proxy 또는 Proxy를 상속받은 오브젝트를 설정.

//준수사항
//프로퍼티가 데이터 디스크립터일 때:
//[[Writable]]:false, [[Configurable]]:false 이면 target 오브젝트의 프로퍼티 값을 변경하여 반환할 수 없으며 값을 그대로 반환.
//프로퍼티가 액세서 디스크립터일 때:
//[[Configurable]]:false 이면 target 오브젝트의 프로퍼티 값을 변경하여 반환할 수 없다.


let sports = {soccer : "축구"};
let handler = {
  get(target, key, receiver){
    return target[key] + ", 11명";
  }
}

let sportsProxy = new Proxy(sports, handler);
console.log(sportsProxy.soccer);

let desc = Object.getOwnPropertyDescriptor(sports, "soccer");
console.log(desc);


// VM1837:9 축구, 11명
// VM1837:12 {value: "축구", writable: true, enumerable: true, configurable: true}
