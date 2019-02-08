class Member{
  set setName(name){
    this.name = name;
  }

  get getName(){
    return this.name;
  }
};

let memberObj = new Member();
memberObj.setName = "남동길";
console.log(memberObj.getName);
