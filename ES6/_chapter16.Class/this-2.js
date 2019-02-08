class Sports{
  constructor(){
    console.log(Sports.getGround());
    console.log(this.constructor.getGround());//static 메서드는 가능하다.
    // console.log(this.constructor.someDo()); TypeError
  }
  static getGround(){
    return '여기야';
  }
  someDo(){
    console.log('무언가하지롱');
  }
}


let obj = new Sports();
