let values = {0:'zero', 1 : 'one', 2:'two', length:3};
for(let key in values){
  console.log(key, ':', values[key]);
};

for(let k = 0; k < values.length; k++){
  console.log(values[k]);
}

//Array는 아니지만 Array처럼 사용할 수 있는 Object 오브젝트를 Array-like라고 한다.
//ES6 스펙에서 사용하는 공식 용어.

//key값이 0부터 시작해서 1씩 증가하고
//length 프로퍼티가 있어야한다.
//둘 중 하나라도 만족하지 않으면 Array-like가 아니다.

let nonSuccessive = { 10: "ten", zoo : '동물원', 2:'two', length:3};
for(let i = 0; i<nonSuccessive.length; i++){
  console.log(nonSuccessive[i]);
}
