let sportsObj = {sports : '스포츠'};
let revocableObj = Proxy.revocable(sportsObj, {
  get(target, key){
    return target[key];
  }
});

console.log(revocableObj.proxy.sports);
revocableObj.revoke();
try {
  revocableObj.proxy.sports;
} catch (e) {
  console.log('사용 불가');
} finally {

}


//정적 메서드로 호출하여 오브젝트를 생성.
//반환된 오브젝트의 revoke()를 호출하면 Proxy가 무효화되어 사용 불가능.
//무효화된 Proxy를 사용하면 TypeError 발생.
