let Sports = {
  getTitle(){
    console.log("Sports");
  }
};

let Soccer = {
  getTitle(){
    super.getTitle();
    console.log("Soccer");
  }
};

Object.setPrototypeOf(Soccer, Sports); //Soccer__proto__에 Sports 오브젝트의 프러퍼티가 첨부된다.
Soccer.getTitle();
