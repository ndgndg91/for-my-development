let Sports = function(){};
let sportsObj = new Sports;
console.log(sportsObj.toString());

Sports.prototype[Symbol.toStringTag] = "Sports-Function";
console.log(sportsObj.toString());


//Symbol.toStringTag
//Symbol.prototype.toStringTag()


//Object.prototype.toString() 과 기능이 비슷함.
//toString()은 인스턴스/오브젝트를 문자열로 변환하며 [object Object]형태로 반환.
//Function 오브젝트도 [object Object]를 반환하므로 구분이 힘듬.
//이때 Symbol.toStringTag를 사용하여 표시될 문자를 지정 가능.
