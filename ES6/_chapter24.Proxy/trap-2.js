let target = {food: '밥'};
let midde = new Proxy(target, {
  get(target, key){
    return target[key] + ',수저';
  }
});

let left = midde.food;
console.log(left);
