let arrayObj = Array.from({0:"zero", 1:"one", length:2});

console.log(Array.isArray(arrayObj));//true
console.log(arrayObj);//["zero","one"]

let stringObj = Array.from("ABC");
console.log(stringObj);//["A","B","C"]
