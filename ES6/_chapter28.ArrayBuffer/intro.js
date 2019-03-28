//ArrayBuffer는 바이너리 데이터를 저장하는 오브젝트이다.
//TypedArray와 DataView는 ArrayBuffer에 데이터를 CRUD하는 오브젝트이다.


//Typed Array 는 엘리먼트의 타입이 모두 동일하며 각 에리먼트 값은 바이너리 타입이다.
//오직 숫자 값의 바이너리만 사용 가능하다.
//배열 형태를 가질 뿐 Array오브젝트는 아니다 -> Array.isArray()로 체크하면 false를 반환한다.


//Array 처리 메커니즘
//100개의 엘리먼트가 존재한다고 가정할 때, 50번째 인덱스에 엘리먼트를 추가하면 51번째부터 끝까지
//하나씩 이동하는 처리를 해야 한다.
//이를 메모리 관점에서 보면 메모리주소를 이동해야 한다.
//배열 끝에 늘어날 메모리 영역이 없으면 별도의 영역에 저장하고 두 개의 배열을 연결해야 한다.
//처리속도와 부하 문제가 발생한다.

//따라서 배열의 엘리먼트를 삭제하면 앞으로 당기지 않고, 삭제한 인덱스를 undefined로 설정한다.
//그리고 배열을 읽을 때 undefined로 설정한 엘리먼트를 제외시킨다.
//하지만 복수의 배열을 연결하여 읽거나 추가할 때는 어쩔수 없이 처리 속도가 떨어진다.



//메모리 측면
//자바스크립트는 64비트 즉, 8바이트를 사용하여 값을 표현한다.
//숫자 1은 1바이트로 표현할 수 있는데, 8바이트를 사용함으로써 7바이트를 낭비하게 된다.

//1. 배열의 길이가 변하지 않는 형태가 필요하다. 사용에 불편하지만, 배열 처리 속도를 향상시킨다.
//2. 값(데이터) 표현에 필요한 만큼의 바이트를 사용하면 메모리 사용을 줄일 수 있다.

let bufferObj = new ArrayBuffer(20);//20바이트 추후에 변경 불가능. maximun 3억바이트?
console.log(bufferObj.byteLength);
let int32View = new Int32Array(bufferObj);//TypedArray 인스턴스 생성. 8비트 -> 1바이트 32비트 -> 4바이트  4바이트 단위로 데이터 처리

let bufferObj2 = new ArrayBuffer();
console.log(bufferObj2.byteLength);

let bufferObj3 = new ArrayBuffer("12");
console.log(bufferObj3.byteLength);
