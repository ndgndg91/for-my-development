let promiseObj = Promise.resolve(
  {sports: '스포츠', music: '음악'}
);

promiseObj.then((param) => {
  for ( let name in param) {
    console.log(name, param[name]);
  }
});

Promise.resolve(
  ["sports", "music"]
).then((param) => console.log(param))

// [Log] sports – "스포츠"
// [Log] music – "음악"
// [Log] ["sports", "music"] (2)


let oneObj = Promise.resolve(
  {sports : "스포츠"}
);

Promise.resolve(oneObj).then((param) => {
  console.log(param);
});
// [Log] {sports: "스포츠"}

let proObj = Promise.resolve({
  then(resolve){
    console.log("1: then");
    resolve("thenable");
  }
});

proObj.then((value) => {console.log("2:",value);})
// [Log] 1: then
// [Log] 2: – "thenable"

let thenable = {
  then(resolve, reject) {
    resolve("resolve");
    reject("에러");//호출 되지 않는다.
  }
};
let obj1 = Promise.resolve(thenable);
obj1.then(
  (value) => console.log(value),
  (value) => console.log("실행되지 않음")
);
// [Log] resolve
