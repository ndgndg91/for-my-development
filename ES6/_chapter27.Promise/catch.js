function create(param){
  return new Promise((resolve, reject) => {
    param === 'ok' ? resolve(param) : reject(param);
  });
};

create('fail').then((param) => {
  console.log("성공 : ",param);
}).catch((param) => {
  console.log("실패 : ",param);
});

//두가지 방법
//then(성공, 실패)
//then(성공).catch(실패)


function create(param){
  return new Promise((resolve, reject) => {
    resolve("resolve");
  });
};

create().then((param) => {
  console.log("1: then,", param);
  throw '에러 발생 시키기';
}).catch((param) => {
  console.log("2: catch,", param); //return 문을 작성하지 않아서
}).then((param) => {
  console.log("3: then,",param);//undefined
}).catch((param) => {
  console.log("4: catch,", param);
});


// [Log] 1: then, – "resolve"
// [Log] 2: catch, – "에러 발생 시키기"
// [Log] 3: then, – undefined
