const setObj = new Set();
const newSet = new Set([1, 2, 1, 2, "스포츠"]);
console.log(newSet.size);//3

for(let element of newSet){
  console.log(element);
}
//1
//2
//스포츠
