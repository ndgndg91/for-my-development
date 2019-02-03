
//1보다 큰 값에서 최솟값과 1과의 차이를 나타낸다.
//유동 소수점 처리에서 미세한 값 차이 때문에 일치하지 않을 때 사용.
let total = 0.1 + 0.2;
console.log(total);//0.30000000000000004

let result = (Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log(result);

let value = (Math.pow(10,1) * 0.1) + (Math.pow(10,1) * 0.2);
console.log(value / 10 === 0.3);
