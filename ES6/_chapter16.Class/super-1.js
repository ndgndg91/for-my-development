class Sports {
  setGround(ground){
    console.log('부모클래스에서 호출');
    this.ground = ground;
  }
};

class Soccer extends Sports{
  setGround(ground){
    super.setGround();
    console.log('자식 클래스에서 호출');
    this.ground = ground;
  }
}

let obj = new Soccer();
obj.setGround('여기');
console.log(obj.ground);
//부모클래스에서 호출
//자식 클래스에서 호출
//여기


//부모 클래스 메서드 super.메서드명으로 접근
