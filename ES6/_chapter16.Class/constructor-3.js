class Member{
  constructor(){
    return {name : "남동길"};
  }
  getName(){
    return "이름";
  }
}

let memberObj = new Member();
console.log(memberObj.name);//남동길
console.log(memberObj.getName);//undefined


//memberObj 는 {name: "남동길"} 이기 때문
