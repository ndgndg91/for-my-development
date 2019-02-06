let gen = function*(value){
  value = value + 10;
  yield ++value;
  value = value +7;
  yield ++value;
};

let genObj = gen(1);

console.log(genObj.next());//[Log] {value: 12, done: false}
console.log(genObj.next());//[Log] {value: 20, done: false}
console.log(genObj.next());//[Log] {value: undefined, done: true}
