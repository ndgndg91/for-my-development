let get = (one) => {
  console.log(one);
}

get(...[1,2,3]);
//1



let practice = (one,two,three) => {
  console.log(one);
  console.log(two);
  console.log(three);
  console.log(one, two, three);
}

practice([1,2,3]);

let practice2 = (...rest) => {
  console.log(rest);
}

practice2([1,2,3]);
