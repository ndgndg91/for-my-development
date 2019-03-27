function order(mili) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("실행", mili);
      resolve(mili);
    }, mili);
  });
};

Promise.all([order(300), order(200), order(100)]).then((milis) => {
  console.log("호출", milis);
});
//이터러블 오브젝트에 작성한 순서로 Promise 인스턴스가 생성된다. 모든 인스턴스가 성공 사태이면, then()의 핸들러 함수를 실행.

// [Log] 실행 – 100
// [Log] 실행 – 200
// [Log] 실행 – 300
// [Log] 호출 – [300, 200, 100] (3)


function order2(mili) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(mili);
      mili === 200 ? reject("reject") : resolve("mili");
    }, mili);
  });
};

Promise.all([order2(300), order2(200), order2(100)]).then((milis) => {
    console.log("then resolve");
  },
  (error) => {
    console.log("then", error);
  });

// [Log] 100
// [Log] 200
// [Log] then – "reject"
// [Log] 300


function order3(mili) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(mili);
      mili === 400 ? reject("reject") : resolve("mili");
    }, mili);
  });
};

Promise.all([order3(300), order3(200), order3(100)]).then((milis) => {
    console.log("then resolve");
  },
  (error) => {
    console.log("then", error);
  });

// [Log] 100
// [Log] 200
// [Log] 300
// [Log] then resolve
