let result = [1,2,3].find((value, index, allData) => value === 2);
console.log(result);

result = [1,3,1].find(function(value, index, allData){
  return value === 3 && value === this.key;
},{key:3});

console.log(result);
