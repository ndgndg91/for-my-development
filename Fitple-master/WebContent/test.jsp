<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Fitple</title>
<meta name="author" content="Alvaro Trigo Lopez" />
<meta name="description" content="fullPage plugin by Alvaro Trigo. Pure javascript version of full screen slider." />
<meta name="keywords"  content="fullpage,jquery,alvaro,trigo,plugin,fullscren,screen,full,iphone5,apple,pure,javascript,slider,hijacking" />
<meta name="Resource-type" content="Document" />
<link rel="stylesheet" type="text/css" href="js/javascript.fullPage.css" />
<link rel="stylesheet" type="text/css" href="css/Index.css" />
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/javascript.fullPage.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script type="text/javascript" src="js/scroll.js"></script>
</head>
<body id='body'>
<div id='header'>
		<div id='menu1' class='menu1'>
		</div>
		<a href='test.jsp'><div class='logo'>
		</div></a>
		<div id='menu2' class='menu2'>
		</div>
		
	</div>

<div id="fullpage">
	<div class="section " id="section0">
		<div class="content">
			
		</div>
	</div>
	<div class="section" id="section1">
		<div class="content">
		<div class='wrap'>
			<form class='userinput' name='userinput' method='get' action='search_proc.jsp'>
				<div><section><h1>기장</h1></section><input type='number' name='Length'></div>
				<div><section><h1>허리</h1></section><input type='number' name='Waist'></div>
				<div><section><h1>허벅지</h1></section><input type='number' name='Thigh'></div>
				<div><section><h1>밑위</h1></section><input type='number' name='Crotch'></div>
				<div><section><h1>밑단</h1></section><input type='number' name='Hem'></div>	
				
				<div class='inputbtn'>
				<button class='searchbtn' type='submit' name='search'>Search</button>
				</div>
				</form>
			</div>
		</div>
	</div>
	<%if(session.getAttribute("id")== null){ %>
	<div class="section" id="section2">
		<div class="content">
		<div id='box' class='loginbox'>
		<span class='login__close'>&#x2715;</span>
		<div class='login_content'>
		<form name='userinput' method='get' action='login.jsp'>
		<p>아이디 : <input type='text' name='id'></p>
		<p>비밀번호 : <input type='text' name='pw'></p>
		<button type='submit'>로그인</button>
		</form>
		</div>
		</div>
			<div class='co_content'>
			
				<p>&nbsp</p>
				<p>&nbsp</p>
				<p>&nbsp</p>
				<p>&nbsp</p>
			
			<div class='bottom'>
				<div class='login'></div>
				<div class='findid'></div>
			</div>
			</div>
	
	</div>
	</div>
	<%}else{ %>
	<div class="section" id="section2_a">
		<div class="content">
			<div class='info'>
			<p><%=session.getAttribute("id") %>님 안녕하세요</p>
			<a href='logout.jsp'><button type='button'>로그아웃</button></a>
			</div>
		<div class='mypage'>
			<div class='mypage_left'>
			<p><input type='number' name='length'></p>
			<p><input type='number' name='waist'></p>
			<p><input type='number' name='thigh'></p>
			<p><input type='number' name='crotch'></p>
			<p><input type='number' name='hem'></p>
			</div>
			<div class='mypage_right'>
			<p><input type='text' name='id'></p>
			<p><input type='password' name='pwd'></p>
			<p><input type='text' name='name'></p>
			<p><input type='text' name='email'></p>
			<p><input type='text' name='phone'></p>
			</div>
		</div>	
		</div>	
	</div>
	
	<div class="section" id="section3">
		<div class="content">
			3
		</div>	
	</div>
	<%} %>
</div>

<script type="text/javascript">
	fullpage.initialize('#fullpage', {
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
		css3:true
	});

</script>

</body>
</html>
