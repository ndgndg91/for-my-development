let target = {ground : '여기야~'};
let newProxy = new Proxy(target, {});

newProxy.sports = "농구";
console.log(newProxy);
console.log(target);


// VM373:5
// Proxy {ground: "여기야~", sports: "농구"}
// [[Handler]]: Object
// [[Target]]: Object
// [[IsRevoked]]: false
// VM373:6
// {ground: "여기야~", sports: "농구"}
// ground: "여기야~"
// sports: "농구"
// __proto__: Object


//newProxy는 target 오브젝트를 참조하기 때문이다.
