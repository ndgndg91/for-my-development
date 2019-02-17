class Sports {
  construct(event){
    this.event = event;
  }
};

let newProxy = new Proxy(Sports, {
  construct(target, params, proxy){
    console.log(target);
    console.log(params);
    console.log(proxy);
    return new target(params[0]);
  }
});

let sportsObj = new newProxy('축구');
console.log(sportsObj.event);// undefined
//문제있는 예제
