class ExtendArray extends Array {
  constructor(){
    super();// Array 의 생성자 호출
  }
  getTotal(){
    let total = 0;
    for(var value of this){
      total += value;
    };
    return total;
  }
};

let obj = new ExtendArray();
obj.push(10,20);
console.log(obj.getTotal()); //30
