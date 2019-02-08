class Member{
  setName(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }
};

Member.prototype.getTitle = function(){};
console.log(typeof Member); // function

//class 특징
//1.strict 모드에서 실행
//2.클래스에 메서드 작성 방법
//3.prototype에 프로퍼티 연결
//4.prototype에 프로퍼티 추가


//글로벌 오브젝트에 설정되지 않는다. window.Member => undefined
//Member.prototype.setName
//Member.prototype.getName
