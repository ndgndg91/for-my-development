let obj = {nine: 999};
obj[Symbol("one")] = 111;
obj[Symbol("two")] = "222";
console.log(obj);

for(var key in obj){
  console.log(key);
};


//for-in 문에서 symbol-keyed 프로퍼티가 열거되지 않는다.
//Symbol이 [[Enumerable]]:false이기 때문.
