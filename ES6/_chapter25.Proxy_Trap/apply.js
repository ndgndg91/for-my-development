function getValue(...values){
  return values.reduce(function(previous, current){
    return previous + current;
  });
};

let newProxy = new Proxy(getValue, {
  apply(target, thisObj, args){
    console.log(target);
    console.log(thisObj);
    console.log(args);
    return target.apply(thisObj, args);
  }
});

console.log(newProxy(10, 20, 30));
console.log(newProxy.apply("", [10, 20 ,30]));
console.log(newProxy.call({add:100}, 10, 20 ,30));

//VM1071:9 ƒ getValue(...values){
//   return values.reduce(function(previous, current){
//     return previous + current;
//   });
// }
// undefined
// VM1071:11 (3) [10, 20, 30]
// VM1071:16 60
// VM1071:9 ƒ getValue(...values){
//   return values.reduce(function(previous, current){
//     return previous + current;
//   });
// }
// VM1071:10
// VM1071:11 (3) [10, 20, 30]
// VM1071:17 60
// VM1071:9 ƒ getValue(...values){
//   return values.reduce(function(previous, current){
//     return previous + current;
//   });
// }
// VM1071:10 {add: 100}
// VM1071:11 (3) [10, 20, 30]
// VM1071:18 60
