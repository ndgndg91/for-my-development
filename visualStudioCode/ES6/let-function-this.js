"use strict";
var sports = "축구";
let music = "재즈";

function get(){
    var sports = "농구";
    let music ="클래식";
    console.log("1 : ", sports); //농구
    console.log("2 : ", this.sports); //축구
    console.log("3 : ", this.music); //undefined
};

window.get(); // 함수안에 this는 window 객체를 참조한다.
get(); // 함수안에 this는 window 객체를 참조하지 않는다!!!!

//농구
//축구
//undefined
//VM147:9 Uncaught TypeError: Cannot read property 'sports' of undefined
// at get (<anonymous>:9:30)
// at <anonymous>:14:1