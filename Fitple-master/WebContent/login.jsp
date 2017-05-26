<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.util.* , Fitple.Fitplebean"  %>
<% request.setCharacterEncoding("UTF-8"); %>
<% String id = request.getParameter("id");
	String pwd = request.getParameter("pw");%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
<jsp:useBean id="dao" class="Fitple.Fitpledao" />
</head>
<body>
	<%
		
		boolean check = dao.checkid(id, pwd);
		if(check){
			session.setAttribute("id",id);
			session.setAttribute("pw",pwd);
			response.sendRedirect("test.jsp");%>
	<%
		}else{ %>
			<script>alert("id없음");
					window.history.back();</script>
			
			
	<%} %>

</body>
</html>