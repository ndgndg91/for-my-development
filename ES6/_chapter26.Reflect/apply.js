function getValue(...values){
  return this.base + values.reduce((p, c) => {
    console.log(p);
    console.log(c);
    return p + c;})
};

console.log(Reflect.apply(getValue, {base : 100 }, [10, 20 ,30]));




let result = Reflect.apply(String.prototype.indexOf, "ABC", ["B"]);
console.log(result);



function getValue2(...values){
  console.log(values);
  return this.base + values.reduce((p, c) => {return p + c;});
}

let newProxy = new Proxy(getValue2, {
  apply(target, thisObj, params) {
    console.log(target);
    console.log(thisObj);
    console.log(params);
    return Reflect.apply(target, thisObj, params);
  }
});

console.log(Reflect.apply(newProxy, {base : 100}, [ 10, 20, 30]));
