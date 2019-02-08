let sports = function(){
  console.log(new.target);
}

sports();//undefined
new sports();
//ƒ (){
  // console.log(new.target);
// }


//생성자 함수로 호출하면  new.target은 constructor를 참조한다. sports 함수에 constructor를 작성하지 않았으므로 디폴트 constructor가 호출된다.
//constructor가 sports 전체를 참조하므로 sports 함수 코드가 출력된다.
