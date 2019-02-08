try{
  let result = Member;
}catch(e){
  console.log("호이스팅 불가");
};

class Member {
  static getMember(){
    return "member";
  }
};


//class 는 호이스팅이 불가능하다.
//클래스 선언문 표현식 모두 해당된다.
