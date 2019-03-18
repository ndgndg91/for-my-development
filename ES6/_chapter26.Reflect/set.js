let sportObj = {};
console.log(Reflect.set(sportObj, "soccer", "축구"));
console.log(sportObj);


let sportObj2 = {
  set setGame(event){
    Reflect.set(sportObj2, event[0], this.player || event[1]);
  }
};

Reflect.set(sportObj2, "setGame", ["soccer"], {player:11});

console.log(sportObj2);

Reflect.set(sportObj2, "setGame", ["baseball", 9]);
console.log(sportObj2);


let sportsArray = [ '농구' ];
Reflect.set(sportsArray, 1, "축구");
console.log(sportsArray);




let sportObj3 = {};
let newProxy = new Proxy(sportObj3, {
  set(target, key, value, receiver) {
    Reflect.set(target, key, value);
  }
});

Reflect.set(newProxy, "baseball", "야구");
console.log(sportObj3);
