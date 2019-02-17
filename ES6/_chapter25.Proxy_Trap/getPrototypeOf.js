class Sports {
  getGround(){
    return '여기';
  }
}

let newSports = new Sports();

let newProxy = new Proxy(newSports, {
  getPrototypeOf(target){
    return Object.getPrototypeOf(target);
  }
});

console.log(Object.getPrototypeOf(newProxy));
//{constructor: ƒ, getGround: ƒ}

console.log(newProxy.__proto__);
//{constructor: ƒ, getGround: ƒ}
console.log(Sports.prototype.isPrototypeOf(newProxy));//true
console.log(Object.prototype.isPrototypeOf(newProxy));//true
