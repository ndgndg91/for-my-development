let Backsoo = function(){};
Backsoo.prototype.getName = function(){
  return this.name;
}
let nameObj = { name : "남동길"};
Reflect.setPrototypeOf(nameObj, Backsoo.prototype);
console.log(nameObj.getName());

console.log(Reflect.getPrototypeOf(nameObj));
let obj = {name : '남동길'};
console.log(Reflect.getPrototypeOf(obj));//{}
