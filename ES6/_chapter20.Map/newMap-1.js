//key value 형태
//Object 오브젝트의 key는 String 또는 Symbol이지만
//Map 오브젝트는 Object, function을 key로 사용이 가능하다.

//{key : value }가 아닌 {"key", "value"}와 같이 이터러블 형태로 작성

//이터러블로 작성하는것과 , key에 다양한 타입을 작성 할 수 있는것이 Map과 Object의 차이이다.


//Map 오브젝트에 추가한 순서대로 읽히는 것은 엔진에서 key, value 외에 별도로 일련번호를 부여하기 때문이다. 이런 메커니즘 때문에 Object 오브젝트와 Function 오브젝트를
//Map 오브젝트 key로 사용 가능하다.

let emptyMap = new Map();
let newMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key1", "sports"]
]);

for (let element of newMap){
  console.log(element);
}
//(2) ["key1", "sports"]
//(2) ["key2", "value2"]

//같은키로 작성할 경우 마지막으로 작성한 값으로 대체된다.
