let sportsObj = Object.defineProperty({}, {
  baseball: {value: '축구', enumerable : true},
  swim : {value : '수영'}
});

// let newProxy = new Proxy(sportsObj, {
//   ownKeys(target){
//     return Object.getOwnPropertyNames(target);
//   }
// });
//
// console.log(Object.getOwnPropertyNames(newProxy));
// console.log(Object.keys(newProxy));


//문제있는 예제
