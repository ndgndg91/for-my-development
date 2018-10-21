//"use strict";
one = 100;
function get(){
    one = 300;
    console.log("함수 : ", one);
}
get();
console.log("글로벌 : ", one);

//1.함수 안에 작성한 let 변수는 함수가 스코프.
//2. 함수안에 if(a==0){let sprots= "축구"} 형태로 코드를 작성했을 때, sports 변수는 함수가 스코프가 아니라 if문의 블록 {} 스코프입니다.
//3.같은 스코프에서 같은 이름의 let 변수를 선언할 수 없다.
//4. let 변수는 호이스팅(hoisting) 되지 않는다.