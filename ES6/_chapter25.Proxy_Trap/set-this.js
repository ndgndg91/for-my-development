let target = { event : "축구"};
let handler = {
  ground : "여기",
  set(target, key, value, receiver){
    console.log(this.ground);
    this.home = "서울";
    return true;
  }
};

let sportsProxy = new Proxy(target, handler);
sportsProxy.sports = "스포츠";
console.log(handler.home);
