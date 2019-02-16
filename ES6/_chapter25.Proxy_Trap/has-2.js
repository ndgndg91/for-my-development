let sportsObj = {soccer : "축구"};
Object.preventExtensions(sportsObj); // 오브젝트에 프로퍼티를 추가할 수 없는 상태로 만들어버림.

let newProxy = new Proxy(sportsObj, {
  has(target, key){
    return target[key];
    //return false; -> 에러
  }
});

console.log("baseball" in newProxy);
console.log("soccer" in newProxy);
