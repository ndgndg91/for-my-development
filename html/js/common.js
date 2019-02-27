var processFail = function (jqXHR){
  console.log(jqXHR);
  console.log(jqXHR.status);
  console.log(jqXHR.statusText);
  var msg = '';
        if (jqXHR.status === 0) {
            msg = '연결 불가. 네트워크를 확인하세요.';
        } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
        } else if (jqXHR.status == 401) {
            msg = 'Unauthorized. [401]';
        } else if (jqXHR.status == 498) {
            msg = 'Not Found SecretCode [498]';
        } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
        alert( "Request failed: " + msg );
}


var appendHeader = function () {
  let header = `<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #fff4f0;">
    <!-- Navbar content -->
    <a class="navbar-brand" href="/~ndgndg91/dayLife/index.html">Main</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkExpenditure" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            지출
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkExpenditure">
            <a class="dropdown-item" href="/~ndgndg91/dayLife/expenditure/expenditureWrite.html">지출 기록</a>
            <a class="dropdown-item" href="#">지출 수정</a>
            <a class="dropdown-item" href="#">지출 삭제</a>
            <a class="dropdown-item" href="/~ndgndg91/dayLife/expenditure/expenditureList.html">지출 조회</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkIncome" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            수입
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkIncome">
            <a class="dropdown-item" href="#">수입 기록</a>
            <a class="dropdown-item" href="#">수입 수정</a>
            <a class="dropdown-item" href="#">수입 삭제</a>
            <a class="dropdown-item" href="/~ndgndg91/dayLife/income/incomeList.html"">수입 조회</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkWorkHistory" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            근무 일지
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkWorkHistory">
            <a class="dropdown-item" href="/~ndgndg91/dayLife/workHistory/workHistoryWrite.html">근무일지 기록</a>
            <a class="dropdown-item" href="#">근무일지 수정</a>
            <a class="dropdown-item" href="#">근무일지 삭제</a>
            <a class="dropdown-item" href="/~ndgndg91/dayLife/workHistory/workHistoryList.html">근무일지 조회</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkDiary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            일기
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkDiary">
            <a class="dropdown-item" href="#">일기 쓰기</a>
            <a class="dropdown-item" href="#">일기 수정</a>
            <a class="dropdown-item" href="#">일기 지우기</a>
            <a class="dropdown-item" href="#">일기 보기</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Temp</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link btn btn-primary" id="logout" style="color:white;" onclick="logout()">로그아웃</a>
        </li>
      </ul>
    </div>
    <!-- <form class="form-inline">
        <button class="btn my-2 my-sm-0" type="submit" style="background-color: #ff733f;color: white;">Log Out</button>
    </form> -->
  </nav>
`;
 $('body').prepend(header);
}

var logout = function() {
  if(confirm("로그아웃 하시겠습니까?")){
    sessionStorage.clear();
    location.href = '/~ndgndg91/dayLife/login.html';
  }
}
