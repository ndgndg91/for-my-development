//string 오브젝트에서 정규 표현식을 사용할 수 있는 메서드는 match(), replace(), search(), split() 이다.
//Symbol 오브젝트에 대응하는 메서드로는 Symbol.match(), Symbol.replace(), Symbol.search(), Symbol.split() 있다.

//Symbol.match()는 String.prototype.match() 대신 호출된다.
//match() 기능을 더 다양하게 작성 가능하다.
//하지만 방법과 기준은 같아야 한다.
//String.prototype.match()가 호출되면 먼저 오브젝트에서 Symbol.match 작성 여부를 체크한다. 존재하면 오브젝트의 Symbol.match()를 호출한다.

console.log("1:", "Sports".match(/s/));

class MatchCheck {
  constructor(base) {
    this.base = base;
  }
  [Symbol.match](target){
    return this.base.indexOf(target) >= 0;
  }
}


let instMatch = new MatchCheck("sports");
console.log("2:" , "po".match(instMatch));//true
