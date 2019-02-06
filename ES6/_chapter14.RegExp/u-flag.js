let result = /\u{31}\u{32}/u.test("12");
console.log(result);//true  unicode로 인식했을 경우

result = /\u{31}\u{32}/.test("12");
console.log(result);//false  string으로 인식했을 경우
