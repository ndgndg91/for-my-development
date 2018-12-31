try{
  let obj = Object.assign(null, {x : 1})
}catch(e){
  console.log("null 지정 불가!");
}
let primitiveVal1 = Object.assign(123);
let primitiveVal2 = Object.assign(456, 70);
console.log(primitiveVal1);
console.log(primitiveVal2);

//#######################################

console.log(Object.assign("ABC",{one : 1}));
console.log(Object.assign(Symbol("ABC"), {one : 1}));

try {
  let obj = Object.assign("ABC", "ONE");
} catch (err) {
  console.log("파라미터 모두 문자열 사용 불가!");
}


//#######################################


let oneObj = {};
Object.assign(oneObj, "ABC", undefined, null); //복사 불가능
console.log(oneObj);//{0: "A", 1: "B", 2: "C"}

let twoObj = {};
Object.assign(twoObj, {key1 : undefined, key2 : null});  // 복사 가능
console.log(twoObj);//{0: "A", 1: "B", 2: "C"}


//#######################################

//sports 와 dup 이 같은 오브젝트를 바라보기 때문에 프로퍼티 값을 바꾸면 같이 영향을 받는다
//이문제를 해결하기 위해서 assign을 사용한다.
let sports ={
  event : "축구",
  player : 11
}

let dup = sports;

sports.player = 55;
console.log(dup.player); //55

dup.event = "농구";
console.log(sports.event); // 농구

//#######################################

let sports = {
  event : "축구",
  player : 11
}

let dup = {};
for(var key in sports){   // 번거롭게 하나하나
  dup[key] = sports[key];
}

sports.player = 33;
console.log(dup.player); //11

//#######################################

let sports = {
  event : "축구",
  player : 11
};
let dup = Object.assign({},sports); // 한 번에 해결
console.log(dup.player); // 11

dup.player = 33;
console.log(sports.player); // 11

sports.event = '수영';
console.log(dup.event); // 축구

//#######################################
//assign 고려사항
// oneObj에  twoObj를 프로퍼티 단위로 복사한 후  이를 mergeObj에 할당하므로 oneObj 와 mergeObj 는 연동된다.
let oneObj = {one : 1}, twoObj = {two : 2};
let mergeObj = Object.assign(oneObj, twoObj);

console.log(Object.is(oneObj, mergeObj));

mergeObj.one = 456;
console.log(Object.is(oneObj, mergeObj));

//#######################################

let obj = { one : 1};
Object.assign(obj, { two : 2}, {two : 22}, {four : 4});
for(var pty in obj){
  console.log(pty, obj[pty]);
}

//#######################################

let count = {
  current : 1,
  get getCount(){
    return ++this.current;
  }
};

let mergeObj = {};
Object.assign(mergeObj, count);
console.log(mergeObj);//{current: 1, getCount: 2} getter 는 호출하고 리턴 값을 반환한다.
