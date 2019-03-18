//Reflect 오브젝트의 모든 메서드는 정적(static) 메서드이다.
//Math.max() 형태로 호출하듯이 Reflect.get() 형태로 호출

//Reflect 오브젝트의 메서드를 호출하기 위해 인스턴스를 생성하지 않아도 되며, 다른 오브젝트에서 Reflect 오브젝트를 상속받지 않아도 된다.
//Reflect 오브젝트는 엔진처리 효율성과 간단하게 코드를 작성할 수 있는 사용성에 중점을 두었다고 생각한다.

let sports = {
  event : "축구",
  ground : "상암구장",
  get getGame(){
    return this.event + ":" + this.ground;
  }
};
console.log(Reflect.get(sports, "event"));
console.log(Reflect.get(sports,"ground"));
console.log(Reflect.get(sports, "getGame", {event : "농구"}));


let sportsArray = ["축구","농구"];
console.log(Reflect.get(sportsArray, 1));
console.log(Reflect.get(sportsArray, 5));



let sports2 = {soccer : "축구"};
let newProxy = new Proxy(sports2, {
  get(target, key, receiver){
    return target[key] + ", 11명";
  }
});

console.log(Reflect.get(newProxy, "soccer"));

let sports3 = {soccer : "축구"};
let newProxy2 = new Proxy(sports3, {
  get(target, key, receiver) {
    return Reflect.get(target, key) + ":11명";
  }
});
console.log(Reflect.get(newProxy2, "soccer"));
