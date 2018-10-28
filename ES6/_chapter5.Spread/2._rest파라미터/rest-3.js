let get3 = (one, ...rest) => {
  console.log(one);
  console.log(rest);
}

get3(...[1,2,3]);
//1
//[2,3]
