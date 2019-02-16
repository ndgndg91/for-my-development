let target = {name: '남동길'};
let handler = {
  set(target, key, value, receiver){
    console.log(target == receiver);
    console.log(receiver.name);
    console.log(receiver);
    return true;
  }
}

let myProxy = new Proxy(target, handler);
myProxy.code = "ndgndg91";

//receiver -> myProxy
