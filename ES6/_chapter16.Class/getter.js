class Member{
  get getName(){
    return "이름";
  }
};

let memberObj = new Member();
console.log(memberObj.getName);

//getter로 메서드로 호출됨.
