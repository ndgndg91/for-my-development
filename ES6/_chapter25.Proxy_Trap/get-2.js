let hobby = {sports : "스포츠", music : "음악"};
let newProxy = new Proxy(hobby, {
  get(target, key ,receiver){
    return target[key] + ", get()";
  }
});

let createObj = Object.create(newProxy,{
  music : { value : "클래식"}
});

console.log(createObj.music);
console.log(createObj.sports);

//1. createObj 인스턴스 프로퍼티에서 music 프로퍼티를 검색.
//2. 프로퍼티가 존재하면 createObj 인스턴스의 [[Get]]()을 호출하여 프로퍼티 값을 반환.


//1. createObj 인스턴스 프로퍼티에서 sports 프로퍼티를 검색.
//2. 프로퍼티가 존재하면 createObj 인스턴스의 [[Get]]()을 호출하여 프로퍼티 값을 반환
//3. 프로퍼티가 존재하지 않으면 상속받은 newProxy가 있는 __proto__에서 sports 프로퍼티를 검색.
//4. __proto__에 sports 프로퍼티가 존재하므로 newProxy의 get() 트랩을 호출하여 프로퍼티 값을 반환.
