let one = [1,2,3,4,5];
console.log(one.copyWithin(0,3));//[4,5]를 [1,2,3,4,5]의 0번째 인덱스부터 덮어써서 = [4,5,3,4,5]

let two = [ 1,2,3,4,5];
console.log(two.copyWithin(0,2,4));//[3,4] index2~3(4-1) 을 [1,2,3,4,5] 0번째 인덱스부터 덮어써서 = [3,4,3,4,5]

let three = [1,2,3,4,5];
console.log(three.copyWithin(3));//[1,2,3] index0~2(3-1) 을 [1,2,3,4,5] 0번째 인덱스부터 덮어써서 = [1,2,3,1,2]
