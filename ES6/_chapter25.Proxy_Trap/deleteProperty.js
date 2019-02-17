let target = {sports: '스포츠', music : '음악'};
let newProxy = new Proxy(target, {
  deleteProperty(target, key){
    return delete target[key];
  }
});

console.log(delete newProxy.sports);
console.log(delete newProxy.dummy);

Object.seal(target);//객체를 밀봉하면 그 객체에는 새로운 속성을 추가할 수 없고, 현재 존재하는 모든 속성을 설정 불가능 상태로 만들어줍니다.
let desc = Object.getOwnPropertyDescriptor(target, 'music');
if (desc.configurable) {
  console.log(delete newProxy.music);
}else {
  console.log('삭제불가');
}
