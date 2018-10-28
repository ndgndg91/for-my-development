//get(1,2,3)으로 호출했을 때, 호출받는 함수의 arguments에 1,2,3이 설정된다.
//arguments도 Array-like이므로 for()문으로 전개가 가능하다.

//Argument 오브젝트가 Array-like이므로 Array 오브젝트와 메서드를 사용이 불가능하다.

//Object.prototype에 연결된 프로퍼티가 Arguemnt 오브젝트의 __proto__에 설정되므로 Object 오브젝트의 메서드를
//사용할 수 있지만, 모든 오브젝트에 Object 오브젝트가 상속되므로 Arguemnt 오브젝트에 한정된 것은 아니다.

//애로우 펑션에서 arguments를 사용할 수 없다.
//함수안의 코드를 보아야 arguments의 사용 여부와 사용 부분을 알 수 있어 코드 가독성이 떨어진다.
//많은 코드를 디버깅하거나 소스 코드를 리팩토링할 때 부담이 된다.

//함수 안의 코드를 체크하지 않고, get(one, ...rest)형태만 보아도 rest 파라미터 범위를 알 수 있어 가독성이 좋다.
//rest 파라미터가 배열이므로 Array 오브젝트이ㅡ 메서드를 사용할 수 있다.
//애로우 펑션 블록에서 rest 파라미터를 사용할 수 있다.


function get(one, two ,three){
  console.log('arguments : ',arguments);
  console.log('arguments.length : ', arguments.length);
  console.log('one : ', one);
  console.log('two : ', two);
  console.log('three : ', three);

  for(let i = 0; i < arguments.length; i++){
    console.log('for() : ',arguments[i]);
  }
}
get(1,2,3);


var restGet = (one, ...rest) =>{
  console.log('one : ', one);
  console.log('rest : ',rest);
  console.log('rest.length : ',rest.length);
  console.log('typeof rest : ',typeof rest  );
  console.log(rest[Symbol.iterator]);
  console.log(rest[0][Symbol.iterator]);

  for(let i = 0; i< rest.length; i++){
    console.log(rest[i]);
  }

  for(let i = 0; i< rest[0].length; i++){
    console.log(rest[0][i]);
  }
}

restGet(1, [5,6,7]);
