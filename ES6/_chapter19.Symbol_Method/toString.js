console.log("1:", Symbol("123").toString());
console.log("2:", Symbol.for("ABC").toString());
console.log("3:", Symbol.iterator.toString());


//Symbol 값을 문자열에 연결하면 TypeError가 발생하지만, toString으로 변환하여 연결하면 에러가 나지 않고 문자열로 연결된다.
