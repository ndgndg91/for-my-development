//TypedArray는 파라미터에 ArrayBuffer 인스턴스를 지정하여 9개 타입의 인스턴스를 생성하고, 생성한 인스턴스에서 제공하는 set()과 같은
//메서드로 ArrayBuffer 인스턴스에 데이터를 저장한다.

//DataView는 파라미터에 ArrayBuffer 인스턴스를 지정하여 인스턴스를 생성하는 것은 같지만, 타입별로 인스턴스를 생성하지 않고
//인스턴스 하나만 생성한다.
//그리고 인스턴스에 포함된 타입별 getter와 setter 를 통해 ArrayBuffer 데이터를 View 한다.


let bufferObj = new ArrayBuffer(5);
let uint8Obj = new Uint8Array(bufferObj);
uint8Obj.set([10], 1);
console.log(bufferObj);
let viewObj = new DataView(bufferObj);
viewObj.setUint8(3, 30);
// [0, 10, 0, 30, 0]


//엔디언(Endian) - 메모리에 데이터를 배치하는 기준.
//바이트 오더(Byte Order)라고도 한다.

//빅-엔디언 0x12 0x34 0x56 0x78 12345678 두 바이트씩 앞에서부터 배치
//리틀-엔디언 0x78 0x56 0x34 0x12 12345678 두 바이트씩 뒤에서부터 배치
//믹스드-엔디언 0x34 0x12 0x78 0x56 빅-엔디언과 리틀-엔디언을 섞은 형태로 배치


//엔디언은 Host 컴퓨터의 OS, CPU 등에 따라 다를 수 있다.
//데이터 송수신은 DataView 오브젝트를 사용해야 한다.
