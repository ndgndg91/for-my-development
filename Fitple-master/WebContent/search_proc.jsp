<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.util.* , Fitple.Fitplebean"  %>
<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="dao" class="Fitple.Fitpledao" />
<% 
float leng = Float.parseFloat(request.getParameter("Length"));
float wai = Float.parseFloat(request.getParameter("Waist"));
float thi = Float.parseFloat(request.getParameter("Thigh"));
float cro = Float.parseFloat(request.getParameter("Crotch"));
float hem = Float.parseFloat(request.getParameter("Hem"));
int count =0;
%>
<% ArrayList<Fitplebean> search = dao.searchdata(leng,wai,thi,cro,hem); %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/search.css" />
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<title>Insert title here</title>
</head>
<body>
	<div id='content'>
		<p><%=search.size() %></p>
		<% 	for (Fitplebean fitple : search){%>
			<div id='cloths<%=count%>' class='cloths'><a href='<%=fitple.getUrl() %>'>
			<%if(fitple.getImageUrl().contains("http://")){ %>
				<img src='<%=fitple.getImageUrl()%>' />
			<%}else{ %>
				<img src='http://<%=fitple.getImageUrl()%>' />
		<%}%></a><p><%=fitple.getBrandname() %></p>
		<div id='info<%=count%>' class='info'>
			<table>
				<tr>
					<td rowspan="2">S</td><td>기 장</td><td><%=fitple.getLength() %></td>
				</tr>
				<tr>
					<td>허 리</td><td><%=fitple.getWaist() %></td>
				</tr>
				<tr>
					<td rowspan="2">M</td><td>허 벅 지</td><td><%=fitple.getThigh() %></td>
				</tr>
				<tr>
					<td>밑 위</td><td><%=fitple.getCrotch() %></td>
				</tr>
				<tr>
					<td rowspan="2">L</td><td>밑 단</td><td><%=fitple.getHem() %></td>
				</tr><tr><td>&nbsp</td></tr>
			</table>
		</div>
		</div>
		<%count +=1;} %>
		
		
		</div>
</body>
</html>