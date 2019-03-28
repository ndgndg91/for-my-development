let bufferObj = new ArrayBuffer(6);
let viewObj = new DataView(bufferObj);
viewObj.setInt16(2, 32767);//빅엔디언
console.log(viewObj.getInt16(2));//빅엔디언

viewObj.setInt16(2, 32767, true);//리틀엔디언
console.log(viewObj.getInt16(2, true));//리틀엔디언
console.log(viewObj.getInt16(2));//빅엔디언

//3번 째 파라미터에 엔디안 설정
//true면 리틀-엔디언
//false 나 undefined 는 빅-엔디언
