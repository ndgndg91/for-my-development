let one = 1, two = 2;
function tagFunction(text, value){
  console.log("1:", text[0]);
  console.log("2:", value);
  console.log("3:", text[1]);
  console.log("4:", typeof text[1]);
}

tagFunction `1+2=${one + two}`;

//1+2=
//3
//
//string


//[구문] tag `문자열 ${expression} 문자열`
