//대상 문자열을 파라미터에 작성한 유니코드 정규화 형식으로 변환하여 반환.
//NFC : Normalization Form Canonical Composition   ==> Default
//NFD : Normalization Form Canonical Decomposition
//NFKC : Normalization Form Compatibility Composition
//NFKD : Normalization Form Compatibility Decomposition


console.log("1:", "ㄱ".charCodeAt(0));
console.log("2:", "ㅏ".charCodeAt(0));

let jamo = "\u3131\u314F";

console.log("3:", jamo.normalize("NFC"));
console.log("4:", jamo.normalize());
console.log("5:", jamo.normalize("NFD"));
console.log("6:", jamo.normalize("NFKD"));
console.log("7:", jamo.normalize("NFKC"));
