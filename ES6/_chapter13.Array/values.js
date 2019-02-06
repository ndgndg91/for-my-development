let iterator = [10,20,30].values();
console.log(iterator.next());
//{value : 10, done:false}
for(let val of iterator){
  console.log(val);
}
//20
//30
