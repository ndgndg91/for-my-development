class Member{
  constructor(){
    return 1;
  }

  getName(){
    return '이름';
  }
};

let memberObj = new Member();
console.log(memberObj.getName());

//constructor에 일반적으로 return 문을 작성하지 않으면, 생성한 인스턴스를 반환.
//한편, return 문으로 인스턴스 이외의 값을 반환할 수 있음. ex)Class Proxy Reflect
