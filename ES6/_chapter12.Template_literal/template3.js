let one = 1, two = 2;
function tagFunction(text, plus, minus){
  console.log(text[0], plus, text[1]);
  console.log(minus, text[2], text[3]);
}

tagFunction `1+2=${one + two}이고 1-2=${one - two}이다.`;

//...rest 파라미터 사용
function tagFunction2(text, ...value){
  console.log(text[0], value[0]);
  console.log(text[1], value[1]);
  console.log(text[2], value[2]);
  console.log(text[3], value[3]);
  console.log(arguments);
}

tagFunction2 `1+2=${one + two} 1-2=${one - two} 1*2=${one*two} 1/2=${one/two}`;
