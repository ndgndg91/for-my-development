let arrowProxy = new Proxy({}, {
  ground : 'here',
  set : (target, key ,value, receiver) => {
    console.log(this == window);//true
    console.log(this.ground);
    return true;
  }
});


arrowProxy.sports = "스포츠";
