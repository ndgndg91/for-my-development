let getAmount = function*(qty, price){
  let amount = Math.floor(qty * price);
  let discount = yield amount;
  return amount - discount;
};

let getDiscount = function(amount){
  return amount > 1000 ? amount * 0.2 : amount * 0.1;
};

let amountObj = getAmount(10, 60);

let result = amountObj.next();
console.log(result);

let dcAmount = getDiscount(result.value);
console.log(dcAmount);
console.log(amountObj.next(dcAmount));

//[시나리오]
//1. 청구 금액을 계산하는 제너레이터 함수와 할인 금액을 계산하는 일반 함수를 정의.
//2. 청구 금액 계산 제너레이터 함수는 수량과 단가를 파라미터로 받아 금액을 계산.
//3. 계산한 금액을 yield로 반환.
//4. 할인 금액 함수를 호출하면서 yield로 반환된 값을 파라미터 값으로 넘겨 줌.
//5. 파라미터의 금액에 따라 할인 금액을 계산하여 반환함.
