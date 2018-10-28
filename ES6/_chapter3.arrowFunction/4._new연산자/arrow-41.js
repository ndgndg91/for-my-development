let sports = () => {
  try {
    let args = arguments;
  } catch (e) {
    console.log("arguments 사용 불가!");
  } finally {

  }
}

sports(1,2);


// function 키워드로 선언한 함수를 sports(1,2) 형태로 호출하면 함수의 arguments에 1과 2가 설정됩니다.
// 반면 화살표 함수에는 arguments가 존재하지 않습니다. 화살표 함수블록에서 arguments를 사용하면 ReferenceError가 발생합니다.


//ES6에서는 arguments eotlsdp rest 파라미터를 사용합니다. rest 파라미터는 "let sports = (...rest) => {code}" 형태와 같이 소괄호 () 안에 점(.)을 세 개 작성하고 이어서
//파라미터 이름을 작성합니다. sports(1 ,2)로 호출하면 1과 2가 rest 파라미터에 배열로 설정됩니다.

//arguments는 Argument 오브젝트를 대신하는 프로퍼티로 함수가 호출되면 Argument오브젝트를 생성하고 함수 실행이 끝나 빠져나올 때 삭제합니다. 함수를 100번 호출하면 100번
//Argument 오브젝트를 생성하고 삭제하므로 효율이 떨어집니다. rest 파라미터는 Argument 오브젝트를 생성하지 않으므로 효율이 높습니다.
// 이런 점을 고려하여 Argument 오브젝트를 생성하지 않는 것으로 생각합니다.
