let get = () => 123;
get();


// new 연산자를 사용하려면 get() 함수에 prototype이 연결되어 있어야 하고, 여기에 constructor가 연결되어 있어야 합니다. 그런데 get() 함수에 연결되어 있지 않으므로
// new 연산자로 인스턴스를 생성할 수 없습니다.
