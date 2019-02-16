let newProxy = new Proxy([10, 20], {
  get(target, key, receiver){
    return target[0] + target[1];
  }
});

console.log(newProxy.listArray);//30

//newProxy에 listArray 프로퍼티가 없지만 get() 트랩이 호출된다.
