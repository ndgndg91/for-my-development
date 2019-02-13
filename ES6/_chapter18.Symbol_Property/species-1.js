let arrayObj = [1,2,3];
let sliceOne = arrayObj.slice(1,3);
let sliceTwo = arrayObj.slice(1,2);

//Symbol.species는 constructor를 반환한다.
//constructor로 인스턴스를 생성하여 반환하는 것과 같다.
//오버라이드가 가능하다.


//arrayObj 는 Array 인스턴스이다.
//Array 오브젝트가 아니다, isArray() 프로퍼티가 연결되어 있지 않기 때문이다.
