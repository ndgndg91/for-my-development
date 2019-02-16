let sportsObj = Object.defineProperty({}, "sports", {
  set(){this.value = 123},
  configurable: false
});


let newProxy = new Proxy(sportsObj, {
  get(target, key){
    return target[key];
  }
});

let errorProxy = new Proxy(sportsObj, {
  get(target, key){
    return 123;
  }
})

try {
  newProxy.sports;
} catch (e) {
  console.log("에러");
} finally {

}

try {
  errorProxy.sports
} catch (e) {
  console.log('에러~');
} finally {

}

//configurable : false 값을 바꿔서 return 하면 에러발생
//원래는 undefined가 출력되어야 함.
