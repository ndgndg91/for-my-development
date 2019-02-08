class Sports{
  constructor(member){
    this.member = member;
    console.log(this.member);
  }
};

class Soccer extends Sports{
  constructor(member){
    super(member);
    this.member = 456;
    console.log(this.member);
  }
}


let obj = new Soccer(123);


console.log(obj.member);

//123
//456
//456


//생성자 오버라이딩
