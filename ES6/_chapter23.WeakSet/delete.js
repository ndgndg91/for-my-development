let newString = new String("sdf");
const newWeakSet = new WeakSet([newString]);

console.log(newWeakSet.delete(newString));
console.log(newWeakSet.has(newString));
