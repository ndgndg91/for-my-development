let Sports = function(){};
Sports.prototype.getCount = function(){
  return 123;
};

let protoObj = Object.setPrototypeOf({}, Sports.prototype);
console.log(protoObj.getCount());



let Sports = function(){};
Sports.prototype.getCount = function(){
  return 123;
};

let fnObj = Object.setPrototypeOf({}, Sports);
console.log(fnObj.getCount);
console.log(fnObj.prototype.getCount.call(Sports));
