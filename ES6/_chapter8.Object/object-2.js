var obj = {};
Object.defineProperty(obj, "book" , {
  get : function(){
    return '책';
  }
});

console.log(obj.book);


Object.defineProperty(obj, "item", {
  set : function(param){
    this.sports = param;
  }
});

obj.item = "야구";
console.log(obj.sports);


//get, set 속성


let obj ={
  value : 123,
  get getValue(){
    return this.value;
  }
};

console.log(obj.getValue); //123


let obj = {
  set setValue(value){
    this.value = value;
  }
};

obj.setValue = 123;
console.log(obj.value);
