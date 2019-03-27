class Sports{
  constructor(ground){
    this.ground = ground;
  }
};

let obj = Reflect.construct(Sports, ["상암구장"]);
console.log(obj.ground);//상암구장

class Dg{
  constructor(name){
    this.name = name;
  }
  getName(){
    return this.name;
  }
}

class Else {
  getName(){
    return "Else.getName() 사용";
  }
}

let obj2 = Reflect.construct(Dg, ["남동길"], Else);
console.log(obj2.getName());//Else.getName() 사용
//Dg 클래스의 constructor를 호출하고 Else 클래스의 prototype을 사용하여 인스턴스를 생성


class Backsoo{
  constructor(...values){
    this.names = values;
  }
  getNames(){
    return this.names;
  }
}
//Backsoo 클래스의 생성자 트랩을 가진 프록시 객체 생성
let newProxy = new Proxy(Backsoo, {
  construct(target, params, proxy){
    return Reflect.construct(target, params);
  }
});
//프록시에 생성자 호출
let backsoos = Reflect.construct(newProxy, ['남동길','동기릿']);
console.log(backsoos.getNames());//['남동길','동기릿']
