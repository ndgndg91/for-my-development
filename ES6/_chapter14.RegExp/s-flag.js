let regexpObj = /CD/y;
console.log("1:", regexpObj.lastIndex); //0
console.log("2:", regexpObj.test("ABCDEF"));//false

regexpObj.lastIndex = 2;
console.log("3:", regexpObj.test("ABCDEF"));//true C의 인덱스 :2 D의 인덱스 : 3  찾았기 때문에 lastIndex += 1  === (3+1)
console.log("4:", regexpObj.lastIndex);//4
console.log("5:", regexpObj.test("0123CD"));//true C의 인덱스 :4 D의 인덱스 : 5 찾았기 때문에 lastIndex += 1  === (5+1)
console.log("6:", regexpObj.lastIndex);//6
