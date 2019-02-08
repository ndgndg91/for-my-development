class Sports{
  constructor(){
    console.log("Sports:", new.target.name);
  }
};

class Soccer extends Sports{
  constructor(){
    super();
    console.log("Soccer:", new.target.name);
  }
};

let sportsObj = new Sports();
let soccerObj = new Soccer();
//Sports: Sporst
//Sports: Soccer
//Sports: Soccer
//ES6에서 겉으로 드러나지 않는 프로퍼티가 있는데 name 프로퍼티이다.
//ES5에도 name 프로퍼티가 있었는데, 값이 설정되지 않아서 그다지 사용하지 않았다.
//ES6는 클래스, 함수, 오브젝트에 name 프로퍼티가 존재하며 이름이 설정된다.
