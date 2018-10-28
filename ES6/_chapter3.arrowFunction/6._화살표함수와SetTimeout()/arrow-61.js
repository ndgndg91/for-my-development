let Sports = function(){
  this.count = 20;
};

Sports.prototype = {
  plus : function(){
    this.count += 1;
  },

  get : function(){
    setTimeout(() => {
      this.plus();
      console.log(this.count); //21
    }, 1000);
  }
};

let newSports = new Sports();
newSports.get();

//arrow-51.js의 문제인
//setTimeout의 this가 window 오브젝트를 참조하는 문제를 () => {} 애로우 펑션을 통해서
//new 연산자를 통해 생성한 Sports 인스턴스의 this를 참조하도록 했다.
