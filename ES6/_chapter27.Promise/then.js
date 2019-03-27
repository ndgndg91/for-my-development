function create(){
  return new Promise((resolve) => resolve(100));
};
create().then(() => {
  console.log("1: then");});

create().then((param) => {
  console.log("2: then",param);
  return param + 50;//[[PromiseValue]]에 설정만
});

create().then((param) => {
  console.log("3: then,", param);
  return param + 70; //[[PromiseValue]]에 설정하고 반환
}).then((param) => {
  console.log("4: then,", param);
});

// [Log] 1: then
// [Log] 2: then – 100
// [Log] 3: then, – 100
// [Log] 4: then, – 170
