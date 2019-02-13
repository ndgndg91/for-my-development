//Object 오브젝트에는 Symbol.iterator 가 없다.
//그래서 for-of 문을 사용할 수 없다.

//Symbol.iterator가 있으면 반복 처리를 할 수 있다.
//Object 오브젝트에 Symbol.iterator를 작성하면 반복 처리가 가능하다.


let obj = {
  [Symbol.iterator](){
    return {
      maxCount : 2,
      count : 0,
      next(){
        if(this.count < this.maxCount){
          return {value : this.count++, done : false};
        }
        return {value : undefined, done : true};
      }
    }
  }
};

let iteratorObj = obj[Symbol.iterator]();

console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
