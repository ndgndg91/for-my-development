let values = [10,20,30];
let iterator = values.entries();
console.log(iterator.next());

for(var [key, value] of iterator){
  console.log(key, ":", value);
};

//1 : 20
//2 : 30
