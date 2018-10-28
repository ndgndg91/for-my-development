let Sports = function(){
  this.count = 20;
};

Sports.prototype = {
  plus : function(){
    this.count += 1;
  },

  get : function(){
    setTimeout(function(){
      console.log(this === window); //true
      console.log(this.plus); //undefined
    }, 1000);
  }
};

let newSports = new Sports();
newSports.get();


//setTimeout이 window 오브젝트 함수이므로 this가 window 오브젝트를 참조하게 됩니다.
// 그래서 콘솔에 true가 출력됩니다. 여기서 문제는 newSports.get() 형태로 호출했으므로 this가 newSports의 인스턴스를 참조해야 하는데 window 오브젝트를 참조한다.
