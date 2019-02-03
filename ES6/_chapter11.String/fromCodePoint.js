//유니코드의 코드 포인트에 해당하는 문자를 반환.
console.log("1:", String.fromCodePoint(35,36,37));//#$%
console.log("2:", String.fromCodePoint(0x31,0x32,0x33));//123
console.log("3:", String.fromCodePoint(44032, 44033));//가각
console.log("4:", String.fromCodePoint(0x1F418));

console.log("5:", String.fromCodePoint(0x1f418));
console.log("6:", String.fromCodePoint(0xD83D, 0xDC18));
