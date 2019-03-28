console.log(Uint8Array.from([12,34]));
console.log(Uint8Array.from("12"));

let threeObj = Uint8Array.from("56", function(value){
  console.log(value);
  return value;
}, this);
console.log(threeObj);

let fourObj = Uint8Array.from({length : 3}, function(value, key){
  return key;
});
console.log(fourObj);

//{length:3} = {0:0,1:0,2:0, length:3}
