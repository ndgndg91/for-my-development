let bookObj = {book : 123};
bookObj[Symbol("one")] = 10;
bookObj[Symbol.for("two")] = 20;

let names = Object.getOwnPropertyNames(bookObj);
console.log("1:",names);//["book"]

let symbolList = Object.getOwnPropertySymbols(bookObj);
console.log("2:",symbolList);//[Symbol(one), Symbol(two)]

for (let sym of symbolList) {
  console.log(sym.toString(), bookObj[sym]);
}
//Symbol(one) 10
//Symbol(two) 20

let emptyList = Object.getOwnPropertySymbols({});
console.log("5:", emptyList.length);//0
