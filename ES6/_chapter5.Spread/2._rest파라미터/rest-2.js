let get2 = (...rest) => {
  console.log(rest);
  console.log(Array.isArray(rest));
}

get2(...[1,2,3]);
//[1,2,3]
//true
