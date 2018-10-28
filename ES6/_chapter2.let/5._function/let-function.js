let sports = "축구", music = "재즈";
function get(){
    let music = "클래식";
    console.log(music);
    console.log(sports);
}

get();

//클래식
//축구

//함수 스코프가 우선하기 때문에 같은이름의 변수이지만 함수 스코프인 클래식이 출력된다.