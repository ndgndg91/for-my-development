let nameObj = {name : "남동길"};
console.log(Reflect.has(nameObj, "name"));

function sports(){};
console.log(Reflect.has(sports, "hasOwnProperty"));


let sportsObj = {baseball : "야구"};
let newProxy = new Proxy(sportsObj, {
  has(target, key) {
    console.log(target);
    console.log(key);
    return Reflect.has(target, key);
  }
});

console.log(Reflect.has(newProxy, "baseball"));
