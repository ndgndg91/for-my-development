class Sports {
  getSports(){
    return '스포츠';
  }
};

class Music{
  getMusic(){
    return '음악';
  }
};

let newMusic = new Music('클래식');

let newProxy = new Proxy(newMusic, {
  setPrototypeOf(target, proto){
    Object.setPrototypeOf(target, proto);
    return true;
  }
});

Object.setPrototypeOf(newProxy, Sports.prototype);


console.log(newMusic.getSports);//ƒ getSports(){
    // return '스포츠';
  // }
console.log(newMusic.getMusic);//undefined

Object.setPrototypeOf(newProxy, Music.prototype);

console.log(newMusic.getSports);//undefined
console.log(newMusic.getMusic);//ƒ getMusic(){
    // return '음악';
  // }
