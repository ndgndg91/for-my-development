let newString = new String("dfsfd");
const newWeakSet = new WeakSet([newString]);
console.log(newWeakSet.has(newString));
