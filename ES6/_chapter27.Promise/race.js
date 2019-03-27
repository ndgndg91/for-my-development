function order(mili) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(mili);
      resolve(mili);
    }, mili);
  });
};

Promise.race([order(300), order(200), order(100)]).then((milis) => console.log("then:", milis),
  (error) => console.log(error));

//처음 한번만 핸들러 함수를 호출한다.
  // [Log] 100
  // [Log] then: – 100
  // [Log] 200
  // [Log] 300
