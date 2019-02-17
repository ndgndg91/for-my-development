let target = {};
let newProxy = new Proxy(target, {
  defineProperty(target, key, descriptor){
    console.log(target);
    console.log(key);
    console.log(descriptor);
    descriptor.value = descriptor.value + ":축구:";
    Object.defineProperty(target, key, descriptor);
    return true;
  }
});

Object.defineProperty(newProxy, "sports", {
  value : "스포츠", writable: true, configurable: true
});

console.log(target);

//Object.defineProperty()는 처리에 성공하면 프로퍼티가 반영된 오브젝트를 반환하고 실패하면 TypeError가 발생한다.
//반면 handler.defineProperty()는 오브젝트를 반환하지 않고 처리에 성공하면 true를 반환하고, 실패하면 false를 반환한다.
