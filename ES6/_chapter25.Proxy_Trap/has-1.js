//target 오브젝트에서 프로퍼티 key 존재 여부를 반환.

let newProxy = new Proxy({sports : "스포츠"},{
  has(target, key){
    return key in target ? true : false;
  }
});


console.log("sports" in newProxy);
console.log("music" in newProxy);
