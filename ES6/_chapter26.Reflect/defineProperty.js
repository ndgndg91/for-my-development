let backsooObj = {
  name : "남동길"
};

let result = Reflect.defineProperty(backsooObj, "backsoo", {
  get(){
    return this.name;
  }
});

console.log(result);
console.log(backsooObj.backsoo);
