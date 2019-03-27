function create(param){
  return new Promise(function(resolve, reject){
    if ( param === 'ok') {
      resolve(param);
      console.log("1: resolve");
    } else {
      reject(param);
    }
  });
};

create('ok').then(function(param){
  console.log("3 : 성공,", param);
}, function(param){
  console.log("3 : 실패,",param);
});

console.log("2 : 끝");



function fail(param){
  return new Promise(function(resolve, reject){
    if (param === 'ok') {
      resolve(param);
      console.log("1: resolve");
    } else {
      reject(param);
      console.log("1: reject");
    }
  });
}

fail('fail').then((param) => {
  console.log("3: 성공,", param);
}, (param) => {
  console.log("3: 실패,", param);
});

console.log("2: 끝");
