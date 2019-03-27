let promiseObj = Promise.reject("reject 처리");
promiseObj.then(
  (param) => console.log(param),
  (param) => console.log("에러:", param)
);
//에러: – "reject 처리"

let errorObj = new Error('에러');
let promiseObj = Promise.reject(errorObj);
promiseObj.then(
  (param) => console.log(param),
  (error) => console.log("1:", error.message)
);

Promise.reject(errorObj).catch((error) => {
  console.log("2:",error.message);
});

Promise.reject(errorObj)
.then((param) => console.log(param),
      (error) => console.log("3:",error.message)
    );

    // [Log] 1: – "에러"
    // [Log] 2: – "에러"
    // [Log] 3: – "에러"
