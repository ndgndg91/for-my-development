class Sports{
  static setGround(ground){
    this.ground = ground;
  }
  static getGround(){
    return this.ground;
  }
};

Sports.setGround('여기야~');
console.log(Sports.getGround);
