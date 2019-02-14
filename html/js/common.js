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
