let newMap = new Map([
  ["key1","value1"],
  ["key2","value2"]
]);

for(let element of newMap){
  element.forEach((keyValue, index) => {
    console.log(index, keyValue);
  });
};

for(let [key, value] of newMap){
  console.log(key, value);
}
