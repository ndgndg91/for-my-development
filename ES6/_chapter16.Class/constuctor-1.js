class Member{
  constructor(name){
    this.name = name;
  }
  getName(){
    return this.name;
  }
}

let memberObj = new Member('스포츠');
console.log(memberObj.getName());//스포츠
