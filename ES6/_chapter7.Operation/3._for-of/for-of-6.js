let sports = {
  soccer : "축구",
  baseball : "야구"
};

let keyList = Object.keys(sports); //key 값을 list로 반환
for(var key of keyList){
  console.log(key, sports[key]);
};

//ES7에 추가된 거듭 제곱 연산자 : **
console.log(3**2);
console.log(3**3);
console.log(Math.pow(3,3));
