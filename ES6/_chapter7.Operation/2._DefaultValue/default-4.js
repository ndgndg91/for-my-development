let getTotal = ([one, two] = [10, 20]) => one + two;
console.log(getTotal());

let getValue = ({two : value } = {two : 20}  ) => value;
console.log(getValue());


//파라미터 디스트럭처링 그리고 디폴트 값
