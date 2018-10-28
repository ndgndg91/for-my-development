let Sports = function(){
  this.count = 20;
};

Sports.prototype = {
  add : () => {
    this.count += 1;
  }
};

let newSports = new Sports();

newSports.add();
console.log(newSports.count);
console.log(window.count);


//prototype에 화살표 함수를  연결하면, this가 메서드를 호출한 인스턴스를 참조하지 않고 window 오브젝트를 참조합니다.
//따라서 화살표 함수가 아닌 function 키워드 함수를 prototype에 연결해야 합니다.
