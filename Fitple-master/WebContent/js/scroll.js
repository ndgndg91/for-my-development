
function login(){
	
	var loginbtn = $('.login'),
		loginbox = $('.loginbox'),
		loginClose = $('.login__close');
	
	loginbtn.on('click', function(e){
		document.getElementById('box').className="loginbox--active";
		e.stopPropagation()
	});
	
	loginClose.on('click', function() {
		document.getElementById('box').className="loginbox";
	});
	
}


function menucheck(){
	var url = location.pathname;
	var menu1 = $('.menu1');
	var menu2 = $('.menu2');
	var menu3 = $('.menu3');
	var menu4 = $('.menu4');
	var pagename = $('#body').attr('class');
	if(pagename.indexOf('fp-viewing-firstPage') > 0){
		document.getElementById("menu1").className="menu1_on";
		document.getElementById("menu2").className="menu2";
		document.getElementById("menu3").className="menu3";
		document.getElementById("menu4").className="menu4";
	}else if (pagename.indexOf('fp-viewing-secondPage') > 0){
		document.getElementById("menu1").className="menu1";
		document.getElementById("menu2").className="menu2_on";
		document.getElementById("menu3").className="menu3";
		document.getElementById("menu4").className="menu4";
	}else if(pagename.indexOf('fp-viewing-3rdPage') > 0 ){
		document.getElementById("menu1").className="menu1";
		document.getElementById("menu2").className="menu2";
		document.getElementById("menu3").className="menu3_on";
		document.getElementById("menu4").className="menu4";
	}else if(pagename.indexOf('fp-viewing-4thpage') >0){
		document.getElementById("menu1").className="menu1";
		document.getElementById("menu2").className="menu2";
		document.getElementById("menu3").className="menu3";
		document.getElementById("menu4").className="menu4_on";
	}
	
};


$(function() {
	menucheck();
	login();
	});

