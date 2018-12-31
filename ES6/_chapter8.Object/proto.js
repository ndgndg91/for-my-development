//prototype 과 __proto__ 차이
let Sports = function(){
  this.member = 11;
};

Sports.prototype.getMember = function(){};
let sportsObj = new Sports();
console.log(sportsObj.__proto__ === Sports.prototype);


let Sports = function(){};
Sports.prototype.get = function(){};
let sportsObj = new Sports();

sportsObj.__proto__["set"] = function(){};
sportsObj.set();
let result = Sports.prototype.set;
console.log(result);
